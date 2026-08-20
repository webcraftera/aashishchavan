import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Aashish Chavan — Software Engineer, CEO & Flask Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020408",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "680px",
            height: "680px",
            background:
              "radial-gradient(circle, rgba(61,110,248,0.14) 0%, transparent 65%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(236,240,251,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(236,240,251,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(61,110,248,0.09)",
            border: "1px solid rgba(61,110,248,0.22)",
            borderRadius: "100px",
            padding: "10px 24px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#4d80ff",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Software Engineer • Technology Entrepreneur
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "78px",
            fontWeight: 800,
            color: "#ecf0fb",
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            marginBottom: "18px",
            display: "flex",
          }}
        >
          Aashish Chavan
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "27px",
            fontWeight: 500,
            color: "#828ca8",
            marginBottom: "52px",
            display: "flex",
          }}
        >
          CEO, WEBCRAFTERA LLP · Flask & Full-Stack Developer
        </div>

        {/* Skill chips */}
        <div style={{ display: "flex", gap: "10px" }}>
          {["Python & Flask", "React & Next.js", "Node.js", "AI & ML", "REST APIs"].map(
            (skill) => (
              <div
                key={skill}
                style={{
                  background: "rgba(236,240,251,0.05)",
                  border: "1px solid rgba(236,240,251,0.09)",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  color: "#828ca8",
                  fontSize: "15px",
                  fontWeight: 500,
                  display: "flex",
                }}
              >
                {skill}
              </div>
            )
          )}
        </div>

        {/* URL bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "52px",
            right: "80px",
            color: "#50587080",
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "0.03em",
            display: "flex",
          }}
        >
          aashishchavan.com
        </div>

        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "30%",
            bottom: "30%",
            width: "3px",
            background:
              "linear-gradient(180deg, transparent, #3d6ef8, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
