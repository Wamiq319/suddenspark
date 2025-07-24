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
  | (string & {});

export interface Event {
  id?: string;
  title: string;
  description: string;
  location: string;
  email: string;
  date: string;
  time: string;
  category: EventCategory;
  image?: string;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
  approved: boolean;
}
