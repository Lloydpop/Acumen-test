import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "button";
  isFullwidth?: boolean;
}
export const Button = ({
  children,
  type = "button",
  isFullwidth,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-[#4568D1] w-fit rounded-[30px] py-1 block text-white px-8 ${
        isFullwidth && "w-full"
      }`}
    >
      <span className="block"> {children}</span>
    </button>
  );
};
