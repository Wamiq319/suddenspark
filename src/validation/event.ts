import { z } from "zod";

// Event validation schema: all fields required
export const eventSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be at most 100 characters"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(1000, "Description must be at most 1000 characters"),
  location: z
    .string()
    .min(3, "Location is required")
    .max(100, "Location must be at most 100 characters"),
  email: z.string().email("Invalid email address"),
  category: z
    .string()
    .min(1, "Category is required")
    .max(50, "Category must be at most 50 characters"),
  date: z.date(),
  time: z.date(),
});
