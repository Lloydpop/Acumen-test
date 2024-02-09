import { ArrowDown2 } from "iconsax-react";
import wave from "../../assets/wave2.png";
import { Avatar } from "..";
import { Button } from "../Button/Button";
export const Header = () => {
  const first_name = "Ayomide";
  const last_name = "Olumide";
  return (
    <div className=" absolute top-0 left-0 border-b p-4 w-full h-[70px] lg:pl-80 lg:pr-12 flex justify-between items-center bg-[#535f890e] z-10">
      <div className="flex items-center gap-1">
        <p className="text-[#9999BC]">Hello, {first_name}</p>
        <span className="block">
          <img src={wave} className="w-5 object-cover" alt="wave" />
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Button>Download Report</Button>
        <Avatar size="40" name={`${first_name} ${last_name}`} />
        <ArrowDown2 variant="Bold" className="w-5 h-5 text-[#4568D1]" />
      </div>
    </div>
  );
};
