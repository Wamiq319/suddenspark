// app/event_submit/page.tsx
"use client";

import { useState } from "react";
import {
  InputField,
  Button,
  DatePickerField,
  TimePickerField,
} from "@/components/ui";
import { ImageUploadField } from "@/components/ui/ImageInput";
import type { Event } from "@/types/event";

type EventFormData = {
  title: string;
  description: string;
  location: string;
  category: string;
  date: Date | null;
  time: Date | null;
};

export default function EventSubmitPage() {
  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    description: "",
    location: "",
    category: "",
    date: null,
    time: null,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      date: formData.date ? formData.date.toISOString().split("T")[0] : "",
      time: formData.time
        ? formData.time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "",
    };
    console.log("Submitted Event:", submitData);
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

        <DatePickerField
          value={formData.date}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, date: value }))
          }
          label="Event Date"
        />

        <TimePickerField
          value={formData.time}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, time: value }))
          }
          label="Event Time"
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

        <InputField
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          color="gold"
          outline
          label="Category"
        />

        <div className="w-full max-w-md">
          <label className="block mb-1 text-sm font-medium text-base-content/70">
            Event Description
          </label>
          <textarea
            name="description"
            placeholder="Event Description"
            className="textarea w-full h-32 p-4 border border-base-300 rounded-lg"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="pt-4">
          <Button color="gold" type="submit" rounded className="w-full">
            Submit Event
          </Button>
        </div>
      </form>
    </section>
  );
}
