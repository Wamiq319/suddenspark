"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface ImageUploadFieldProps {
  onChange: (file: File | null) => void;
  resetKey?: number; // Add resetKey prop to trigger reset
}

export function ImageUploadField({
  onChange,
  resetKey,
}: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");

  // Reset function to clear the image preview
  const resetImage = () => {
    setFileName("");
    setPreviewUrl("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onChange(null);
  };

  // Effect to reset when resetKey changes
  useEffect(() => {
    if (resetKey !== undefined) {
      resetImage();
    }
  }, [resetKey]);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file?.name || "");

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl("");
    }
    onChange(file);
  };

  return (
    <div className="w-full max-w-md">
      <div
        className="mt-4 flex flex-col md:flex-row items-center gap-4 bg-base-200 border border-base-300 rounded-lg p-3 min-h-[96px] min-w-0"
        style={{ width: "100%", minWidth: "260px" }}
      >
        <div className="flex items-center justify-center w-32 h-20 bg-base-100 border border-dashed border-[#ffd700] rounded-md overflow-hidden md:mr-4 md:mb-0 mb-4">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="Preview"
              width={128}
              height={80}
              className="w-full h-full object-cover"
              unoptimized
            />
          ) : (
            <span className="text-base-content/40 text-xs">
              No image selected
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0 w-full md:w-auto">
          <div className="text-sm font-medium gold truncate">
            {fileName || "No file chosen"}
          </div>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="input border border-[#ffd700] gold bg-transparent rounded-full px-6 py-3 min-w-[160px] cursor-pointer text-left hover:bg-[#ffd700]/10 transition ml-auto md:ml-auto w-full md:w-auto"
        >
          {fileName ? "Change Image" : "Upload Event Image"}
        </button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
