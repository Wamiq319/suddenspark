"use client";

import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputFieldProps =
  | ({
      textarea?: false;
      color?: "white" | "blue" | "gold";
      outline?: boolean;
      label?: string;
    } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({
      textarea: true;
      color?: "white" | "blue" | "gold";
      outline?: boolean;
      label?: string;
      rows?: number;
      textareaHeight?: string;
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>);

export function InputField(props: InputFieldProps) {
  const {
    color = "white",
    outline = false,
    className = "",
    label,
    ...rest
  } = props;

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

  const isTextarea = "textarea" in props && props.textarea;

  return (
    <div className="w-full max-w-md">
      {label && (
        <label className="block mb-1 text-sm font-medium text-base-content/70">
          {label}
        </label>
      )}
      {isTextarea ? (
        <textarea
          className={[
            "textarea w-full max-w-md font-medium transition duration-200 rounded-lg",
            outline
              ? colorClasses[color]
              : color === "gold"
              ? "bg-[#ffd700] text-white border border-[#ffd700]"
              : colorClasses[color],
            className,
          ]
            .join(" ")
            .trim()}
          rows={props.rows ?? 4}
          style={
            props.textareaHeight ? { height: props.textareaHeight } : undefined
          }
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          type={"type" in props && props.type ? props.type : "text"}
          className={[base, colorClasses[color], "rounded-full", className]
            .join(" ")
            .trim()}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}
