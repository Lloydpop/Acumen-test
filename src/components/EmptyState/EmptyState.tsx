import React from "react";
import data from "../../assets/empty.jpg";

interface EmptyStateProps {
  banner?: string;
  title?: string;
  description?: string;
  Icon?: React.ComponentType<{ className: string; "aria-hidden": boolean }>;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,

  banner = data,
}) => {
  return (
    <div className="py-5  mt-8 min-h-[300px] flex flex-col items-center justify-center text-center">
      <img src={banner} className="w-[200px] mt-5" alt="No Data" />
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-1">
          {title}
        </h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};
