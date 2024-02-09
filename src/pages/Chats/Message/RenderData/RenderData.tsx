import { EmptyState } from "../../../../components/EmptyState/EmptyState";
import { MessageTable } from "../MessageTable";

interface RenderProps {
  data: [];
}
export const RenderData = ({ data }: RenderProps) => {
  return (
    <div>
      {data?.length === 0 || !data ? (
        <EmptyState
          title="No data found"
          description={
            data?.length === 0
              ? "Data not found, please come back later"
              : "Please check your internet connection, or come back later!"
          }
        />
      ) : (
        <MessageTable data={data} />
      )}
    </div>
  );
};
