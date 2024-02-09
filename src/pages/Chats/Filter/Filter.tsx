import { useForm } from "react-hook-form";
import { Select } from "../../../components/Select/Select";
import { Button } from "../../../components";
import { useState } from "react";

export const Filter = () => {
  const messageOption = [
    {
      label: "0 - 500 Messages",
      value: "0 - 500 Messages",
    },
    {
      label: "500 - 2000 messages",
      value: "500 - 2000 messages",
    },
    {
      label: "2000+ Messages",
      value: "2000+ Messages",
    },
  ];

  const mediaOption = [
    {
      label: " 0 - 50 MB",
      value: " 0 - 50 MB",
    },
    {
      label: `50 MB - 200MB, 200MB`,
      value: `50 MB - 200MB, 200MB`,
    },
    {
      label: `200MB - 1GB,1GB+`,
      value: `200MB - 1GB,1GB+`,
    },
  ];

  const filterData = ["Today", "Last 7 days", "This month", "Last 3 months"];
  const [active, SetActive] = useState<number>(0);
  const { control } = useForm();
  return (
    <div className=" py-5">
      <h4 className="ml-10 text-[18px]">Filter Table</h4>
      <div className="flex items-center gap-3 ml-10 mt-6">
        {filterData?.map((item, i) => (
          <p
            onClick={() => {
              SetActive(i);
            }}
            className={`border ${
              active === i ? "border-secondary bg-[#f05a2813] " : ""
            } px-3 py-2 text-[13px] rounded-2xl cursor-pointer`}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-6 mt-7 px-10">
        <div className="col-span-6">
          <Select
            placeholder="dd - mm - yyyy"
            label="Date From"
            name="date_from"
            control={control}
          />
        </div>
        <div className="col-span-6">
          <Select
            placeholder="dd - mm - yyyy"
            label="Date To"
            name="date_to"
            control={control}
          />
        </div>
        <div className="col-span-12">
          <Select
            options={messageOption}
            label="Messages"
            name="message"
            placeholder="Please Select"
            control={control}
          />
        </div>
        <div className="col-span-12">
          <Select
            placeholder="Please Select"
            label="Media Storage Used"
            name="storage"
            control={control}
            options={mediaOption}
          />
        </div>
      </div>
      <div className="absolute bottom-12 flex flex-col items-center gap-5 justify-center w-full px-10">
        <Button isFullwidth>Filter Table</Button>
        <span className="block text-gray-500 text-[14px]">Clear Filter</span>
      </div>
    </div>
  );
};
