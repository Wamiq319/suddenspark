"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function TimePickerField({
  value,
  onChange,
  placeholder = "Select time",
  label,
}: {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  label?: string;
}) {
  return (
    <div className="w-full max-w-md">
      {label && (
        <label className="block mb-1 text-sm font-medium text-base-content/70">
          {label}
        </label>
      )}
      <DatePicker
        selected={value}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        placeholderText={placeholder}
        className="input border border-[#ffd700] text-[#ffd700] bg-transparent rounded-full px-6 py-3 w-full max-w-md placeholder-[#ffd700] focus:outline-none"
      />
    </div>
  );
}
