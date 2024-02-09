import React from "react";

interface LabelProps {
  id?: string;
  label?: string;
}

export const Label: React.FC<LabelProps> = ({ id, label }) => {
  return (
    <label
      htmlFor={id}
      className="block text-[15px]  font-[500] mb-2 text-gray-800"
    >
      {label}
    </label>
  );
};
