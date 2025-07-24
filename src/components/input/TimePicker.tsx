"use client";

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegClock } from "react-icons/fa";

export function TimePickerField({
  value,
  onChange,
  placeholder = "Select time",

  className = "",
}: {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;

  className?: string;
}) {
  return (
    <div className={`w-full max-w-md relative ${className}`}>
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
        className="input-date"
        calendarClassName="custom-datepicker"
        popperClassName="z-50"
      />
    </div>
  );
}
