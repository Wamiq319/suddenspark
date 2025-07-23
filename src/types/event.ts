export type EventCategory =
  | "Community"
  | "Arts & Culture"
  | "Education"
  | "Faith & Spiritual"
  | "Volunteer"
  | "Fundraiser"
  | "Music & Entertainment"
  | "Workshop"
  | "Other"
  | (string & {}); // allow custom string for 'Other'

export interface Event {
  id?: string; // optional if creating
  title: string;
  description: string;
  location: string;
  email: string;
  date: string; // ISO format preferred e.g. "2025-07-30"
  time: string; // e.g. "14:00"
  category: EventCategory;
  image?: string; // optional if no image uploaded
  slug?: string; // optional, generated from title
  createdAt?: string;
  updatedAt?: string;
}
