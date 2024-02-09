import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ArrowDown2 } from "iconsax-react";

export interface LineChartProps {
  activeUsersHistory: Array<{ activeUsers: number }>;
  isMonth?: boolean;
  isDays?: boolean;
}

const LineChart = ({ activeUsersHistory, isDays, isMonth }: LineChartProps) => {
  const activeUsers =
    activeUsersHistory?.map((entry) => entry?.activeUsers) || [];
  const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
  const months = ["jan", "feb", "mar", "april", "may", "june", "jul"];
  const data = {
    labels: activeUsers,
    datasets: [
      {
        label: "Active Users",
        data: activeUsers,
        fill: true,
        backgroundColor: isDays ? "#ea8e512c" : "#15ae731c",
        borderColor: isDays ? "#EA8D51" : " #15AE73",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          color: "#ccc7c7",
        },
      },
      x: {
        display: false,
        ticks: {
          beginAtZero: true,
          color: "#ccc7c7",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "#ccc7c7",
        },
      },
    },
  };

  return (
    <div>
      <div className="mt-1">
        {isDays && (
          <div className="flex justify-between items-center mb-4">
            <p className="text-text_color text-[12px] uppercase">
              Daily active users
            </p>
            <div className="flex items-center gap-6 text-[14px] ">
              <p className="flex items-center gap-2 bg-[#EFEFEF] py-2 px-3 rounded-[4px]">
                30 Days <ArrowDown2 className="w-5 h-5" />
              </p>
              <p className="flex items-center gap-2 bg-[#EFEFEF] py-2 px-3 rounded-[4px]">
                All Activities <ArrowDown2 className="w-5 h-5" />
              </p>
            </div>
          </div>
        )}
        {isMonth && (
          <div className="flex justify-between items-center mb-4">
            <p className="text-text_color text-[12px] uppercase">
              Monthly active users
            </p>
            <div className="text-[14px] ">
              <p className="flex items-center gap-2 bg-[#EFEFEF] py-2 px-3 rounded-[4px]">
                All Activities <ArrowDown2 className="w-5 h-5" />
              </p>
            </div>
          </div>
        )}
        <Line data={data} options={options} id="line" />
        {isDays ? (
          <div className="flex justify-between text-text_color uppercase text-[12px] mt-3">
            {days?.map((day) => (
              <p>{day}</p>
            ))}
          </div>
        ) : (
          <div className="flex justify-between text-text_color uppercase text-[12px] mt-3">
            {months?.map((month) => (
              <p>{month}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LineChart;
