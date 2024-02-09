import React from "react";
import { getInitials } from "../../utils";

interface AvatarProps {
  name: string;
  size?: string;
  textSize?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  size = "32",
  textSize = "12",
}) => {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full bg-[#EFEFEF]`}
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      <span
        className="text-xs font-bold leading-none text-gray-500 "
        style={{
          fontSize: `${textSize}px`,
        }}
      >
        {getInitials(name)}
      </span>
    </span>
  );
};
