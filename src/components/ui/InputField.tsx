"use client";

import React, { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: "white" | "blue" | "gold";
  outline?: boolean;
  label?: string;
}

export function InputField({
  color = "white",
  outline = false,
  className = "",
  type = "text",
  label,
  ...props
}: InputFieldProps) {
  const base =
    "input px-6 py-3 w-full max-w-md font-medium transition duration-200";

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

  const classes = [base, colorClasses[color], "rounded-full", className].join(
    " "
  );

  return (
    <div className="w-full max-w-md">
      {label && (
        <label className="block mb-1 text-sm font-medium text-base-content/70">
          {label}
        </label>
      )}
      <input type={type} className={classes.trim()} {...props} />
    </div>
  );
}
