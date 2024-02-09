import { Cards } from "../components/Cards/Cards";
import { useQuery } from "@tanstack/react-query";
import { chatService } from "../../services/chats/chats.service";
import { bytesToMB } from "../../utils";
import { Pagination } from "../../components";
import { useState } from "react";
import { RenderData } from "./Message/RenderData/RenderData";
import ContentLoader from "react-content-loader";
import { Slider } from "../../components/Slider/Slider";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import { Filter } from "./Filter/Filter";

export const Chats = () => {
  const [page, setPage] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const limit = 5;
  const params = {
    page: page,
    limit: limit,
  };
  const { data: chatData, isFetching } = useQuery({
    queryKey: ["get-chats"],
    queryFn: () => chatService.getChatData(),
  });
  const { data: messageData, isFetching: isLoading } = useQuery({
    queryKey: ["get-message", params],
    queryFn: () => chatService.getMessages(params),
  });

  const data = [
    {
      status: "No of users",
      amount: chatData?.numberOfUsers ?? "0.0",
    },
    {
      status: "Total message sent",
      amount: chatData?.totalMessagesSent ?? "0.0",
    },
    {
      status: "Total media storage used",
      amount: bytesToMB(chatData?.totalStorageUsed ?? 0.0) ?? "0.0",
    },
    {
      status: "total media sent",
      amount: chatData?.totalMediaSent ?? "0.0",
    },
  ];

  return (
    <div className="space-y-6">
      <Cards isLoading={isFetching} data={data} />
      <div className="flex lg:flex-row flex-col justify-between lg:items-center">
        <div className="flex  gap-8 cursor-pointer">
          <p className="border-b-2 font-[500] border-secondary pb-2 text-secondary">
            Direct Messages
          </p>
          <p className="text-[16px] text-gray-800">Groups</p>
        </div>
        <SearchFilter
          onClick={() => {
            setOpen(true);
          }}
          placeholder="Search..."
          value=""
        />
      </div>
      {isLoading ? (
        <ContentLoader viewBox="0 0 380 70">
          <rect x="0" y="0" rx="5" ry="5" width="380" height="70" />
        </ContentLoader>
      ) : (
        <div className="bg-white py-6 rounded-[5px]">
          <RenderData data={messageData?.data} />
          <Pagination
            itemsPerPage={limit}
            totalItems={messageData?.totalDocs}
            currentPage={page}
            handlePageClick={setPage}
          />
        </div>
      )}
      <Slider open={open} setOpen={setOpen}>
        <Filter />
      </Slider>
    </div>
  );
};
