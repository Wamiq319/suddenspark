import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = "",
}) => (
  <div className={`flex items-center justify-center ${className}`}>
    <FaSpinner
      className="animate-spin text-gray-500"
      size={size}
      aria-label="Loading..."
    />
  </div>
);

export default Loader;
