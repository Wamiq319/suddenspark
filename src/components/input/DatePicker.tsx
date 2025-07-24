"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

export function DatePickerField({
  value,
  onChange,
  placeholder = "Select a date",
  color = "white",
}: {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  color?: "white" | "blue" | "gold";
}) {
  return (
    <div className="w-full max-w-md relative">
      <FaRegCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ffd700] text-lg pointer-events-none z-10" />
      <DatePicker
        selected={value}
        onChange={onChange}
        placeholderText={placeholder}
        dateFormat="MMMM d, yyyy"
        className="input border border-[#ffd700] text-[#ffd700] bg-transparent rounded-full pl-10 pr-6 py-3 w-full max-w-md placeholder-[#ffd700] focus:outline-none"
      />
    </div>
  );
}
