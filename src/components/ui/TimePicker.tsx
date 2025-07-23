"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function TimePickerField({
  value,
  onChange,
  placeholder = "Select time",
}: {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
}) {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      placeholderText={placeholder}
      className="input border border-blue-600 text-blue-600 bg-transparent rounded-full px-6 py-3 w-full max-w-md placeholder-blue-600 focus:outline-none"
    />
  );
}
