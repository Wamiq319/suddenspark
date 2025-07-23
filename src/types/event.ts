// /types/event.ts

export type EventStatus = "pending" | "approved";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date format: "2025-08-01"
  time: string; // e.g. "6:00 PM"
  location: string;
  category: string; // Use dropdown values like "Community", etc.
  image?: string; // URL or file path
  slug: string;
  status: EventStatus;
  createdAt?: string;
}
