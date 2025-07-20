// Button component, styled for daisyUI, named export
"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  rounded?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  rounded = false,
  ...props
}: ButtonProps) => {
  const base =
    "btn inline-flex items-center justify-center whitespace-nowrap transition duration-200 font-medium";

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
  };

  const shape = rounded ? "rounded-full" : "rounded-md";

  const classes = [base, variants[variant], shape, className].join(" ");

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
