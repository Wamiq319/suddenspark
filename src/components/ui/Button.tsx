// Button component, styled for daisyUI, named export
"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "white" | "blue" | "gold";
  outline?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  rounded?: boolean;
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
  ...props
}: ButtonProps) => {
  const base =
    "btn inline-flex items-center justify-center whitespace-nowrap transition duration-200 font-medium";

  // Color classes
  const colorClasses = {
    white: outline
      ? "border border-white text-white bg-transparent hover:bg-white hover:text-black"
      : "bg-white text-black border border-white hover:bg-gray-100",
    blue: outline
      ? "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white"
      : "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700",
    gold: outline
      ? "border border-white text-white bg-transparent hover:bg-[#ffd700] hover:text-black"
      : "bg-[#ffd700] text-black border border-[#ffd700] hover:bg-yellow-400",
  };

  const shape = rounded ? "rounded-full" : "rounded-md";

  const classes = [base, colorClasses[color], shape, className].join(" ");

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
