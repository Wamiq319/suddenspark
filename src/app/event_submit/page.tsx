"use client";

import { useState } from "react";
import {
  InputField,
  Button,
  DatePickerField,
  TimePickerField,
  DropdownField,
  ImageUploadField,
} from "@/components";
import type { Event } from "@/types";

const CATEGORY_OPTIONS = [
  { value: "Community", label: "Community" },
  { value: "Arts & Culture", label: "Arts & Culture" },
  { value: "Education", label: "Education" },
  { value: "Faith & Spiritual", label: "Faith & Spiritual" },
  { value: "Volunteer", label: "Volunteer" },
  { value: "Fundraiser", label: "Fundraiser" },
  { value: "Music & Entertainment", label: "Music & Entertainment" },
  { value: "Workshop", label: "Workshop" },
  { value: "Other", label: "Other" },
];

type EventFormData = Omit<
  Event,
  "id" | "slug" | "createdAt" | "updatedAt" | "date" | "time" | "image"
> & {
  date: Date | null;
  time: Date | null;
  image?: File | null;
};

export default function EventSubmitPage() {
  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    description: "",
    location: "",
    email: "",
    category: "Community",
    date: null,
    time: null,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [customCategory, setCustomCategory] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, category: value }));
    if (value !== "Other") setCustomCategory("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const categoryToSubmit =
      formData.category === "Other" && customCategory
        ? customCategory
        : formData.category;

    const formattedDate = formData.date
      ? formData.date.toISOString().split("T")[0]
      : "";
    const formattedTime = formData.time
      ? formData.time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";

    const body = new FormData();
    body.append("title", formData.title);
    body.append("description", formData.description);
    body.append("location", formData.location);
    body.append("email", formData.email);
    body.append("category", categoryToSubmit);
    body.append("date", formattedDate);
    body.append("time", formattedTime);
    if (imageFile) body.append("image", imageFile);

    const res = await fetch("/api/event", {
      method: "POST",
      body,
    });

    const result = await res.json();
    console.log(result);

    setSubmitting(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left CTA Section */}
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold gold">
          Share Your Spark
        </h1>
        <p className="text-lg text-base-content/80 max-w-md mx-auto md:mx-0">
          Hosting a community gathering, meetup, or creative experience? Submit
          your event and let your city know.
        </p>
        <p className="text-base text-base-content/70 max-w-md mx-auto md:mx-0">
          Every event goes through a quick review to ensure alignment with our
          values. Let’s build a stronger, more connected community — one event
          at a time.
        </p>
      </div>

      {/* Event Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-base-100 p-6 rounded-box border border-base-300 shadow-md"
      >
        <ImageUploadField onChange={setImageFile} label="Event Image" />

        <InputField
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          color="gold"
          outline
          label="Event Title"
        />

        <InputField
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          color="gold"
          outline
          label="Contact Email"
        />

        <DatePickerField
          value={formData.date}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, date: value }))
          }
          label="Event Date"
          color="gold"
          placeholder="Choose the event date"
        />

        <TimePickerField
          value={formData.time}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, time: value }))
          }
          label="Event Time"
          color="gold"
          placeholder="Choose the event start time"
        />

        <InputField
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          color="gold"
          outline
          label="Location"
        />

        <DropdownField
          name="category"
          options={CATEGORY_OPTIONS}
          value={formData.category}
          onChange={handleCategoryChange}
          color="gold"
          outline
          label="Category"
        />

        {formData.category === "Other" && (
          <InputField
            name="customCategory"
            placeholder="Enter custom category"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            color="gold"
            outline
            label="Custom Category"
          />
        )}

        <InputField
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          color="gold"
          outline
          label="Event Description"
          textarea
          rows={6}
          textareaHeight="120px"
        />

        <div className="pt-4">
          <Button
            color="gold"
            type="submit"
            rounded
            className="w-full"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Event"}
          </Button>
        </div>
      </form>
    </section>
  );
}
