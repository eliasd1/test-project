"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  animations: {
    duration: 250,
  },
};

interface LineChartProps {
  data: string[];
  labels: unknown[];
  title: string;
}

const LineChart = ({ data, labels, title }: LineChartProps) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="flex-1 min-h-[200px] md:min-h-[450px]">
      <Line
        data={chartData}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    </div>
  );
};

export default LineChart;
