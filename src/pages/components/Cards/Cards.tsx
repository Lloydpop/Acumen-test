import { ReactNode } from "react";
import { Container } from "../../../components";
interface CardsProps {
  data?: { status: string; amount: string | ReactNode }[];
  isLoading: boolean;
}
export const Cards = ({ data, isLoading }: CardsProps) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      {data?.map((item, i) => (
        <div className="lg:col-span-3 col-span-12" key={i}>
          <Container>
            <p className=" text-text_color uppercase text-[12px]">
              {item?.status}
            </p>
            <h2 className="text-[28px] text-text_color mt-2">
              {isLoading ? "0.0" : item?.amount}
            </h2>
          </Container>
        </div>
      ))}
    </div>
  );
};
