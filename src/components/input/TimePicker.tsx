"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegClock } from "react-icons/fa";

export function TimePickerField({
  value,
  onChange,
  placeholder = "Select time",
  color = "white",
}: {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  color?: "white" | "blue" | "gold";
}) {
  return (
    <div className="w-full max-w-md relative">
      <FaRegClock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ffd700] text-lg pointer-events-none z-10" />
      <DatePicker
        selected={value}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        placeholderText={placeholder}
        className="input border border-[#ffd700] text-[#ffd700] bg-transparent rounded-full pl-10 pr-6 py-3 w-full max-w-md placeholder-[#ffd700] focus:outline-none"
      />
    </div>
  );
}
