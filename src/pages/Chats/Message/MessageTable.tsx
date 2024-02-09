import {
  IoEllipsisHorizontalCircleOutline,
  IoEllipsisHorizontalOutline,
} from "react-icons/io5";
import { bytesToMB, formatDate } from "../../../utils";
import { Dropdown } from "flowbite-react";
import { ArrowDown2, ArrowUp2, CloseCircle, Eye } from "iconsax-react";
interface Props {
  data: {
    full_name: string;
    message_sent: number;
    media_storage_used: number;
    date_created: string;
    media_sent: number;
  }[];
}

export const MessageTable = ({ data }: Props) => {
  return (
    <div className=" overflow-hidden overflow-x-auto mb-4 ">
      <table className="min-w-full rounded-[8px] ">
        <thead>
          <tr className="border-b">
            <th className="pl-10 py-3 text-left  font-bold text-text_color uppercase tracking-wider text-[13px]">
              <span> Users</span>
            </th>
            <th className="pl-10 py-3 text-left  font-bold text-text_color uppercase tracking-wider text-[13px]">
              <div className="flex items-center gap-2">
                <span>Messages sent</span>
                <p>
                  <ArrowUp2 variant="Bold" className="w-3 h-3" />
                  <ArrowDown2
                    variant="Bold"
                    className="w-3 h-3 text-gray-400 -mt-[5px]"
                  />
                </p>
              </div>
            </th>

            <th className="pl-10 py-3 text-left   text-text_color uppercase tracking-wider text-[13px]">
              <div className="flex items-center gap-2">
                <span> Media storage used</span>
                <p>
                  <ArrowUp2 variant="Bold" className="w-3 h-3 text-gray-400" />
                  <ArrowDown2
                    variant="Bold"
                    className="w-3 h-3 text-gray-400 -mt-[5px]"
                  />
                </p>
              </div>
            </th>
            <th className="pl-10 py-3 text-left text-text_color uppercase tracking-wider text-[13px]">
              <div className="flex items-center gap-2">
                <span>Date created</span>
                <p>
                  <ArrowUp2 variant="Bold" className="w-3 h-3 text-gray-400" />
                  <ArrowDown2
                    variant="Bold"
                    className="w-3 h-3 text-gray-400 -mt-[5px]"
                  />
                </p>
              </div>
            </th>
            <th className="pl-10 py-3 text-left  text-text_color uppercase tracking-wider text-[13px]">
              <div className="flex items-center gap-2">
                <span>Media sent</span>
                <p>
                  <ArrowUp2 variant="Bold" className="w-3 h-3 text-gray-400" />
                  <ArrowDown2
                    variant="Bold"
                    className="w-3 h-3 text-gray-400 -mt-[5px]"
                  />
                </p>
              </div>
            </th>
            <th className="pl-10 py-3 text-left  text-text_color uppercase tracking-wider sr-only"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {data?.map((item, i) => (
            <tr key={i} className="">
              <td className="pl-10 py-5 text-[16px] whitespace-nowrap text-[#071439] border-b">
                <div className=" capitalize">
                  <div className="flex items-center gap-2">
                    <p>{item?.full_name}</p>
                  </div>
                </div>
              </td>
              <td className="pl-10 py-5 text-[16px] whitespace-nowrap text-[#071439] border-b">
                <p>{item?.message_sent}</p>
              </td>
              <td className="pl-10 py-5 text-[16px] whitespace-nowrap text-[#071439] border-b">
                <p>{bytesToMB(item?.media_storage_used)}</p>
              </td>

              <td className="pl-10 py-5 text-[16px] whitespace-nowrap text-[#071439] border-b">
                <p>{formatDate(item?.date_created)}</p>
              </td>

              <td className="pl-10 py-5 text-[16px] whitespace-nowrap text-[#071439] border-b">
                <p>{item?.media_sent}</p>
              </td>

              <td className="pr-10 pl-4 py-5 text-[16px] whitespace-nowrap text-[#071439] border-b">
                <Dropdown
                  className="w-[197px]"
                  label={
                    <IoEllipsisHorizontalOutline className="h-4 w-4  text-gray-400" />
                  }
                  inline={true}
                  arrowIcon={false}
                >
                  <Dropdown.Item>
                    <div className="flex justify-between  w-full border-b px-3 py-2">
                      <span className="text-gray-600 text-[14px]">View</span>
                      <Eye className="w-4 h-4" />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div className="flex justify-between w-full px-3">
                      <span className="text-red-500 text-[14px]">Disable</span>
                      <CloseCircle className="w-4 h-4 text-red-500" />
                    </div>
                  </Dropdown.Item>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
