"use client";

import React from "react";
import {
  MdEmail,
  MdNumbers,
  MdLock,
  MdLocationOn,
  MdTitle,
} from "react-icons/md";

type InputFieldProps =
  | (React.InputHTMLAttributes<HTMLInputElement> & {
      textarea?: false;
      color?: "white" | "blue" | "gold";
      outline?: boolean;
    })
  | (React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
      textarea: true;
      color?: "white" | "blue" | "gold";
      outline?: boolean;
      rows?: number;
      textareaHeight?: string;
    });

const ICON_MAP: Record<string, React.ElementType> = {
  email: MdEmail,
  number: MdNumbers,
  password: MdLock,
  location: MdLocationOn,
  title: MdTitle,
};

export function InputField(props: InputFieldProps) {
  const { color = "white", outline = false, className = "", ...rest } = props;
  const isTextarea = props.textarea;

  const focusRing = {
    white: "focus:ring-white focus:border-white",
    blue: "focus:ring-blue-600 focus:border-blue-600",
    gold: "focus:ring-[#ffd700] focus:border-[#ffd700]",
  };

  const iconColor = {
    white: "text-neutral-500",
    blue: "text-blue-600",
    gold: "text-[#ffd700]",
  };

  const getIcon = () => {
    if (isTextarea) return null;
    const { type, name } = props as React.InputHTMLAttributes<HTMLInputElement>;
    const iconKey = name === "location" || name === "title" ? name : type;
    const Icon = ICON_MAP[iconKey || ""];

    return Icon ? (
      <Icon
        className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg pointer-events-none z-10 ${iconColor[color]}`}
      />
    ) : null;
  };

  const baseInputClass =
    "w-full max-w-md transition duration-200 font-medium text-neutral-content border border-neutral-content bg-transparent focus:outline-none focus:ring-2";

  const combinedClasses = [
    baseInputClass,
    focusRing[color],
    isTextarea ? "textarea rounded-lg" : "input rounded-full",
    getIcon() && !isTextarea ? "pl-10 pr-6" : "px-6 py-3",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="w-full max-w-md relative">
      {getIcon()}
      {isTextarea ? (
        <textarea
          className={combinedClasses}
          rows={props.rows ?? 4}
          style={
            props.textareaHeight ? { height: props.textareaHeight } : undefined
          }
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          type={
            (props as React.InputHTMLAttributes<HTMLInputElement>).type ||
            "text"
          }
          className={combinedClasses}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}
