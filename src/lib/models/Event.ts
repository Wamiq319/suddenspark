// models/Event.ts
import mongoose, { Schema, Document, Model } from "mongoose";
import type { Event as EventType } from "@/types";

// Define a Mongoose document type that extends the EventType
export interface EventDocument extends Omit<EventType, "id">, Document {
  status: "pending" | "approved" | "declined";
  declineReason?: string;
}

const eventSchema: Schema<EventDocument> = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    date: { type: String, required: true }, // store as ISO string
    time: { type: String, required: true }, // e.g. "14:00"
    category: { type: String, required: true },
    image: { type: String, default: "" },
    slug: { type: String, required: true, trim: true, unique: true },
    status: {
      type: String,
      enum: ["pending", "approved", "declined"],
      default: "pending",
    },
    declineReason: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

// Auto-generate slug on save
// Use EventDocument for correct 'this' typing
eventSchema.pre<EventDocument>("save", function (next) {
  if (!this.isModified("title")) return next();
  this.slug = this.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  next();
});

const EventModel: Model<EventDocument> =
  mongoose.models.Event || mongoose.model<EventDocument>("Event", eventSchema);

export default EventModel;
