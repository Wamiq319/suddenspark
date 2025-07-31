// Button component, styled for modern design system, named export
"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "white" | "blue" | "gold" | "red" | "amber";
  outline?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  color = "white",
  outline = false,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  rounded = false,
  size = "md",
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-opacity-50";

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Color classes with modern styling
  const colorClasses = {
    white: outline
      ? "border-2 border-white text-white bg-transparent hover:bg-white hover:text-black hover:shadow-lg"
      : "bg-white text-black border-2 border-white hover:bg-gray-100 hover:shadow-lg",
    blue: outline
      ? "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white hover:shadow-lg"
      : "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-2 border-blue-600 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg",
    gold: outline
      ? "border-2 border-amber-500 text-amber-600 bg-transparent hover:bg-amber-500 hover:text-white hover:shadow-lg"
      : "bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-2 border-amber-500 hover:from-amber-600 hover:to-yellow-600 hover:shadow-lg",
    red: outline
      ? "border-2 border-red-600 text-red-600 bg-transparent hover:bg-red-600 hover:text-white hover:shadow-lg"
      : "bg-gradient-to-r from-red-600 to-red-700 text-white border-2 border-red-600 hover:from-red-700 hover:to-red-800 hover:shadow-lg",
    amber: outline
      ? "border-2 border-amber-500 text-amber-600 bg-transparent hover:bg-amber-500 hover:text-white hover:shadow-lg transform hover:scale-105"
      : "bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-2 border-amber-500 hover:from-amber-600 hover:to-yellow-600 hover:shadow-lg transform hover:scale-105",
  };

  const shape = rounded ? "rounded-full" : "rounded-xl";
  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const classes = [
    base,
    sizeClasses[size],
    colorClasses[color],
    shape,
    disabledClass,
    className,
  ].join(" ");

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
