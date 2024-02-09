import { useLocation, useNavigate } from "react-router-dom";
import { data } from "./NavData";
import { MessageNotif } from "iconsax-react";
import { FaArrowsLeftRightToLine } from "react-icons/fa6";

export const NavItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="space-y-10">
      {data?.map((item, i) => (
        <button
          disabled={item.link !== "/chat" && item.link !== "/"}
          onClick={() => {
            navigate(item?.link);
          }}
          key={i}
          className={`${
            location.pathname === item?.link
              ? "text-secondary"
              : "text-nav_color"
          } flex items-center gap-2`}
        >
          <span>{item.icon}</span>
          <span className="font-[400]">{item.name}</span>
        </button>
      ))}

      <p className="text-nav_color border-t flex items-center gap-2 pt-12 mt-6 mr-8">
        <FaArrowsLeftRightToLine className="w-6 h-6" />
        Collapse
      </p>
      <p className="text-red-600 flex items-center gap-2 pt-10">
        <MessageNotif className="w-5 h-5" />
        Give Feedback
      </p>
    </div>
  );
};
