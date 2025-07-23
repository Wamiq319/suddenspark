"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function DatePickerField({
  value,
  onChange,
  placeholder = "Select a date",
}: {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
}) {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      placeholderText={placeholder}
      dateFormat="MMMM d, yyyy"
      className="input border border-[#ffd700] text-[#ffd700] bg-transparent rounded-full px-6 py-3 w-full max-w-md placeholder-[#ffd700] focus:outline-none"
    />
  );
}
