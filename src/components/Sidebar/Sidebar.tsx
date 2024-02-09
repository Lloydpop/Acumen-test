import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { Logo } from "../Logo/Logo";
import { NavItem } from "./NavItem/NavItem";

export const Sidebar = () => {
  return (
    <div className="w-[270px]  fixed top-0 left-0 h-full  bg-white z-50">
      <div className="flex justify-between items-center p-7">
        <Logo />
        <div className="bg-[#F5F7FC] w-[42px] h-[42px] rounded-full flex flex-col justify-center items-center">
          <FaArrowDown className="w-3 h-3" />
          <FaArrowUp className="w-3 h-3 mt-[1px]" />
        </div>
      </div>
      <p className="text-[12px] -mt-2 pl-7 text-gray-500">App Name</p>
      <div className="mt-14 h-[400px] side pl-7">
        <NavItem />
      </div>
    </div>
  );
};
