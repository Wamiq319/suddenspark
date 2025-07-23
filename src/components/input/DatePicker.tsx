"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function DatePickerField({
  value,
  onChange,
  placeholder = "Select a date",
  label,
  color = "white",
}: {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  label?: string;
  color?: "white" | "blue" | "gold";
}) {
  return (
    <div className="w-full max-w-md">
      {label && (
        <label
          className={[
            "block mb-1 text-sm font-medium",
            color === "gold"
              ? "text-[#ffd700]"
              : color === "blue"
              ? "text-blue-600"
              : "text-white",
          ].join(" ")}
        >
          {label}
        </label>
      )}
      <DatePicker
        selected={value}
        onChange={onChange}
        placeholderText={placeholder}
        dateFormat="MMMM d, yyyy"
        className="input border border-[#ffd700] text-[#ffd700] bg-transparent rounded-full px-6 py-3 w-full max-w-md placeholder-[#ffd700] focus:outline-none"
      />
    </div>
  );
}
