"use client";

import { useState } from "react";
import {
  InputField,
  DatePickerField,
  TimePickerField,
  DropdownField,
  ImageUploadField,
  Button,
} from "@/components";
import type { Event } from "@/types";
import {
  FaPlusCircle,
  FaCheckCircle,
  FaCalendarAlt,
  FaRocket,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { eventSchema } from "@/validation";

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
  | "id"
  | "slug"
  | "createdAt"
  | "updatedAt"
  | "date"
  | "time"
  | "image"
  | "approved"
  | "status"
  | "declineReason"
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    setErrors({});
    setSuccessMessage("");
    setErrorMessage("");

    // Validate image is present
    if (!imageFile) {
      setErrors({ image: "Event image is required" });
      setSubmitting(false);
      return;
    }

    // Prepare data for validation
    const categoryToSubmit =
      formData.category === "Other" && customCategory
        ? customCategory
        : formData.category;

    const dataToValidate = {
      ...formData,
      category: categoryToSubmit,
    };

    // Validate with zod
    const result = eventSchema.safeParse(dataToValidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      setSubmitting(false);
      return;
    }

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
      const res = await fetch("/api/event/submit", {
        method: "POST",
        body,
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setSuccessMessage(
          "Your event has been submitted and will be published once approved by admin."
        );
        setFormData({
          title: "",
          description: "",
          location: "",
          email: "",
          category: "Community",
          date: null,
          time: null,
        });
        setImageFile(null);
        setCustomCategory("");
      } else {
        setErrorMessage(
          result.message || "Internal error. Please try again later."
        );
      }
    } catch (err) {
      setErrorMessage("Internal error. Please try again later.");
      console.error("Event submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mb-6">
            <FaRocket className="text-3xl text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Submit Your Event
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Share your event with the community and inspire others to join your
            cause.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Left CTA Section */}
          <div className="space-y-8">
            {/* Enhanced CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-xl border border-blue-500">
              <div className="text-center lg:text-left space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Submit. Review. Go Live.
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  Events are manually reviewed for quality and community fit.
                  Once approved, your event will appear on the calendar for all
                  to see.
                </p>

                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <FaPlusCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Quick Submission
                      </h3>
                      <p className="text-white/80">
                        Fill in the short form with your event details.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Manual Review</h3>
                      <p className="text-white/80">
                        Admins verify your event aligns with our guidelines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <FaCalendarAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Community Visibility
                      </h3>
                      <p className="text-white/80">
                        Approved events are added to our Site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Info Card */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-200 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl">
                  <FaUsers className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Community Focused
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We&apos;re building a space for real people doing real
                    things — neighborhood meetups, cultural popups, faith-based
                    efforts, creative workshops, fundraisers and more.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                  <FaLightbulb className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Need Help?
                  </h3>
                  <p className="text-gray-700">
                    All listings go through human review.{" "}
                    <a
                      href="/contact"
                      className="text-amber-600 font-semibold hover:text-amber-700 underline"
                    >
                      Reach out to our team
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Event Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Event Details
              </h3>
              <p className="text-gray-600">Tell us about your amazing event</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {successMessage && (
                <div className="p-4 rounded-xl bg-green-50 text-green-800 border border-green-200">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" />
                    {successMessage}
                  </div>
                </div>
              )}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 text-red-800 border border-red-200">
                  {errorMessage}
                </div>
              )}

              {/* Row: Title + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                    Event Title <span className="text-red-500">*</span>
                  </label>
                  <InputField
                    name="title"
                    placeholder="Enter your event title"
                    value={formData.title}
                    onChange={handleChange}
                    color="gold"
                    outline
                    type="text"
                  />
                  {errors.title && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.title}
                    </div>
                  )}
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <InputField
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    color="gold"
                    outline
                    type="email"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>

              {/* Row: Image Upload */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                  Event Image <span className="text-red-500">*</span>
                </label>
                <ImageUploadField onChange={setImageFile} />
                {errors.image && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.image}
                  </div>
                )}
              </div>

              {/* Row: Location */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                  Location <span className="text-red-500">*</span>
                </label>
                <InputField
                  name="location"
                  placeholder="Event location or venue"
                  value={formData.location}
                  onChange={handleChange}
                  color="gold"
                  outline
                  type="text"
                />
                {errors.location && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.location}
                  </div>
                )}
              </div>

              {/* Row: Date + Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                    Event Date <span className="text-red-500">*</span>
                  </label>
                  <DatePickerField
                    value={formData.date}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, date: value }))
                    }
                    placeholder="Choose the event date"
                  />
                  {errors.date && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.date}
                    </div>
                  )}
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                    Event Time <span className="text-red-500">*</span>
                  </label>
                  <TimePickerField
                    value={formData.time}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, time: value }))
                    }
                    placeholder="Choose the event start time"
                  />
                  {errors.time && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.time}
                    </div>
                  )}
                </div>
              </div>

              {/* Row: Category + Optional Custom */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                  Category <span className="text-red-500">*</span>
                </label>
                <DropdownField
                  name="category"
                  options={CATEGORY_OPTIONS}
                  value={formData.category}
                  onChange={handleCategoryChange}
                  color="gold"
                  outline
                />
                {errors.category && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.category}
                  </div>
                )}
              </div>

              {formData.category === "Other" && (
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                    Custom Category <span className="text-red-500">*</span>
                  </label>
                  <InputField
                    name="customCategory"
                    placeholder="Enter your custom category"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    color="gold"
                    outline
                  />
                  {errors.customCategory && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.customCategory}
                    </div>
                  )}
                </div>
              )}

              {/* Row: Description */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                  Event Description <span className="text-red-500">*</span>
                </label>
                <InputField
                  name="description"
                  placeholder="Tell us about your event, what attendees can expect, and why they should join..."
                  value={formData.description}
                  onChange={handleChange}
                  color="gold"
                  outline
                  textarea
                  rows={6}
                  textareaHeight="120px"
                />
                {errors.description && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.description}
                  </div>
                )}
              </div>

              {/* Enhanced Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={submitting}
                  color="amber"
                  outline
                  size="lg"
                  className="group w-full"
                >
                  <span className="flex items-center justify-center gap-2">
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaRocket className="group-hover:translate-y-[-2px] transition-transform duration-300" />
                        Submit Event
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
