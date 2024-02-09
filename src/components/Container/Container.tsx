import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  return <div className="p-5 bg-white border rounded-[5px]">{children}</div>;
};
