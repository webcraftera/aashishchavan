import { MongoClient, type Collection } from "mongodb";
import type { ContactMessageDoc } from "./types";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI environment variable is not set");
}

let client: MongoClient;

const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

if (!globalWithMongo._mongoClientPromise) {
  client = new MongoClient(uri);
  globalWithMongo._mongoClientPromise = client.connect();
}

const clientPromise: Promise<MongoClient> = globalWithMongo._mongoClientPromise!;

export async function getContactCollection(): Promise<Collection<ContactMessageDoc>> {
  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB || "aashishchavan";
  const db = client.db(dbName);
  return db.collection<ContactMessageDoc>("contact_messages");
}
