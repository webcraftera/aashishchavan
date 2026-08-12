import { NextResponse } from "next/server";
import type { ContactMessage } from "@/lib/types";

const RATE_LIMIT_MAP = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 3;

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.trim().slice(0, 5000);
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();
    const record = RATE_LIMIT_MAP.get(ip);

    if (record && now < record.resetTime) {
      if (record.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
      record.count++;
    } else {
      RATE_LIMIT_MAP.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }

    const body: ContactMessage = await request.json();

    const name = sanitize(body.name || "");
    const email = sanitize(body.email || "").toLowerCase();
    const subject = sanitize(body.subject || "");
    const message = sanitize(body.message || "");

    const errors: Record<string, string> = {};

    if (name.length < 2) errors.name = "Name is required";
    if (!validateEmail(email)) errors.email = "Valid email is required";
    if (subject.length < 3) errors.subject = "Subject is required";
    if (message.length < 10) errors.message = "Message must be at least 10 characters";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
    }

    if (process.env.MONGODB_URI) {
      const { getContactCollection } = await import("@/lib/mongodb");
      const collection = await getContactCollection();
      await collection.insertOne({
        name,
        email,
        subject,
        message,
        status: "new",
        createdAt: new Date(),
      });
    }

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const { sendContactEmail } = await import("@/lib/email");
      await sendContactEmail({ name, email, subject, message });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
