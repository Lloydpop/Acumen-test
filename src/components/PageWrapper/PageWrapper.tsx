import { ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";

interface PageWrapperProps {
  children: ReactNode;
}
export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="lg:ml-[325px] mt-28 lg:mr-12 relative lg:p-0 p-4">
        {children}
      </div>
    </div>
  );
};
