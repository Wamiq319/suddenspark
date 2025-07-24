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
import { FaPlusCircle, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

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

    const formattedDate = formData.date?.toISOString().split("T")[0] || "";
    const formattedTime =
      formData.time?.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }) || "";

    const body = new FormData();
    body.append("title", formData.title);
    body.append("description", formData.description);
    body.append("location", formData.location);
    body.append("email", formData.email);
    body.append("category", categoryToSubmit);
    body.append("date", formattedDate);
    body.append("time", formattedTime);
    if (imageFile) body.append("image", imageFile);

    try {
      const res = await fetch("/api/event", {
        method: "POST",
        body,
      });

      const result = await res.json();
      console.log("Event created:", result);
    } catch (err) {
      console.error("Event submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      {/* Left CTA Section */}

      <div className="space-y-6">
        {/* CTA Card */}
        <div className="bg-blue-600 text-white rounded-xl p-8 shadow-lg space-y-5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Submit. Review. Go Live.
          </h2>
          <p className="text-white/90">
            Events are manually reviewed for quality and community fit. Once
            approved, your event will appear on the calendar for all to see.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-start gap-3">
              <FaPlusCircle className="text-white text-xl mt-1" />
              <div>
                <p className="font-semibold">Quick Submission</p>
                <p className="text-white/80 text-sm">
                  Fill in the short form with your event details.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-white text-xl mt-1" />
              <div>
                <p className="font-semibold">Manual Review</p>
                <p className="text-white/80 text-sm">
                  Admins verify your event aligns with our guidelines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCalendarAlt className="text-white text-xl mt-1" />
              <div>
                <p className="font-semibold">Community Visibility</p>
                <p className="text-white/80 text-sm">
                  Approved events are added to our Site.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-blue-700 text-white/90 rounded-xl p-6 shadow-md space-y-3 text-sm md:text-base text-center md:text-left">
          <p className="leading-relaxed">
            We’re building a space for real people doing real things —
            neighborhood meetups, cultural popups, faith-based efforts, creative
            workshops, fundraisers and more.
          </p>
          <p className="text-white/70 text-sm">
            All listings go through human review. Need help?{" "}
            <a href="/contact" className="underline hover:text-white">
              Reach out to our team
            </a>
            .
          </p>
        </div>
      </div>

      {/* Event Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-base-100 p-6 rounded-box border border-base-300 shadow-sm"
      >
        {/* Row: Title + Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <span className="block mb-1 text-sm font-semibold text-[#ffd700]">
              Event Title
            </span>
            <InputField
              name="title"
              placeholder="Event Title"
              value={formData.title}
              onChange={handleChange}
              color="gold"
              outline
              type="text"
            />
          </div>
          <div className="w-full">
            <span className="block mb-1 text-sm font-semibold text-[#ffd700]">
              Contact Email
            </span>
            <InputField
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              color="gold"
              outline
              type="email"
            />
          </div>
        </div>

        {/* Row: Image Upload */}
        <div>
          <span className="block mb-1 text-sm font-semibold text-[#ffd700]">
            Event Image
          </span>
          <ImageUploadField onChange={setImageFile} />
        </div>

        {/* Row: Location */}
        <div>
          <span className="block mb-1 text-sm font-semibold text-[#ffd700]">
            Location
          </span>
          <InputField
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            color="gold"
            outline
            type="text"
          />
        </div>

        {/* Row: Date + Time */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <span className="block mb-1 text-sm font-semibold text-[#ffd700]">
              Event Date
            </span>
            <DatePickerField
              value={formData.date}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, date: value }))
              }
              color="gold"
              placeholder="Choose the event date"
            />
          </div>
          <div className="w-full">
            <span className="block mb-1 text-sm font-semibold text-[#ffd700]">
              Event Time
            </span>
            <TimePickerField
              value={formData.time}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, time: value }))
              }
              color="gold"
              placeholder="Choose the event start time"
            />
          </div>
        </div>

        {/* Row: Category + Optional Custom */}
        <div>
          <span className="block mb-1 text-sm font-semibold text-[#ffd700]">
            Category
          </span>
          <DropdownField
            name="category"
            options={CATEGORY_OPTIONS}
            value={formData.category}
            onChange={handleCategoryChange}
            color="gold"
            outline
          />
        </div>

        {formData.category === "Other" && (
          <div>
            <span className="block mb-1 text-sm font-semibold text-[#ffd700]">
              Custom Category
            </span>
            <InputField
              name="customCategory"
              placeholder="Enter custom category"
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              color="gold"
              outline
            />
          </div>
        )}

        {/* Row: Description */}
        <div>
          <span className="block mb-1 text-sm font-semibold text-[#ffd700]">
            Event Description
          </span>
          <InputField
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            color="gold"
            outline
            textarea
            rows={6}
            textareaHeight="120px"
          />
        </div>

        {/* Submit Button */}
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
