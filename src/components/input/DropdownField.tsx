"use client";

import React from "react";

export type DropdownOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type DropdownFieldProps = {
  options: DropdownOption[];
  color?: "white" | "blue" | "gold";
  outline?: boolean;
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function DropdownField(props: DropdownFieldProps) {
  const {
    options,
    color = "white",
    outline = false,
    className = "",
    ...rest
  } = props;

  const base =
    "select px-6 py-2 w-full max-w-md font-medium transition duration-200 rounded-full";

  const colorClasses = {
    white: outline
      ? "bg-transparent text-white border border-white placeholder-white"
      : "bg-white text-black border border-white",
    blue: outline
      ? "bg-transparent text-blue-600 border border-blue-600 placeholder-blue-600"
      : "bg-blue-600 text-white border border-blue-600",
    gold: outline
      ? "bg-transparent text-[#ffd700] border border-[#ffd700] placeholder-[#ffd700]"
      : "bg-[#ffd700] text-white border border-[#ffd700]",
  };

  return (
    <div className="w-full max-w-md">
      <select
        className={[
          base,
          colorClasses[color],
          "focus:outline-none focus:ring-2",
          color === "gold"
            ? "focus:border-[#ffd700] focus:ring-[#ffd700]"
            : color === "blue"
            ? "focus:border-blue-600 focus:ring-blue-600"
            : "focus:border-white focus:ring-white",
          className,
        ]
          .join(" ")
          .trim()}
        style={{ maxHeight: 48, overflowY: "auto", lineHeight: 1.5 }}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
