// models/EmailSubscriber.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEmailSubscriber extends Document {
  email: string;
  subscribed: boolean;
  createdAt?: Date;
}

const EmailSubscriberSchema = new Schema<IEmailSubscriber>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    subscribed: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const EmailSubscriber: Model<IEmailSubscriber> =
  mongoose.models.EmailSubscriber ||
  mongoose.model<IEmailSubscriber>("EmailSubscriber", EmailSubscriberSchema);

export default EmailSubscriber;
