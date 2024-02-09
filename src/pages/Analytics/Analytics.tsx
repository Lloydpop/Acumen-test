import { Refresh } from "iconsax-react";
import { Cards } from "../components/Cards/Cards";
import LineChart, { LineChartProps } from "../components/Charts/Chart";
import { Container } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "../../services/dashboard/dashboard.service";
import { generateFakeData, toBytes } from "../../utils";

export const Analytics = () => {
  const {
    data: dashboardData,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["get-dashboard"],
    queryFn: () => dashboardService.getDashboardData(),
  });

  const chartData: LineChartProps["activeUsersHistory"] = generateFakeData(60);

  const data = [
    {
      status: "Users Online",
      amount: dashboardData?.usersOnline ?? "0.0",
    },
    {
      status: "Users Active Today",
      amount: dashboardData?.usersActiveToday ?? "0.0",
    },
    {
      status: "Users Active This Month",
      amount: dashboardData?.usersActiveThisMonth ?? "0.0",
    },
    {
      status: "Peak Currency This Month",
      amount: dashboardData?.peakConcurrency ?? "0.0",
    },
    {
      status: "Dashboard",
      amount: (
        <p>
          {toBytes(dashboardData?.dashboard ?? 0)}{" "}
          <sub className="text-[14px]">of 512GB</sub>
        </p>
      ),
    },
  ];
  return (
    <div className="space-y-6">
      <h4 className="flex items-center gap-3">
        Last updated 1 minute ago{" "}
        <span
          className="text-[14px] cursor-pointer text-green-600 flex items-center gap-2"
          onClick={() => {
            refetch();
          }}
        >
          <Refresh className="w-4 h-4" />{" "}
          {isFetching ? "Refreshing..." : "Refresh"}
        </span>
      </h4>
      <Cards isLoading={isFetching} data={data} />
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-6 col-span-12">
          <Container>
            <LineChart isDays activeUsersHistory={chartData} />
          </Container>
        </div>
        <div className="lg:col-span-6 col-span-12">
          <Container>
            <LineChart isMonth activeUsersHistory={chartData} />
          </Container>
        </div>
      </div>
    </div>
  );
};
