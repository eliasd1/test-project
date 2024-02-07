"use client";

import { MultiAxisLineDataSet } from "@/constants/types";
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

interface MultiAxisLineChartProps {
  dataSets: MultiAxisLineDataSet[];
  labels: unknown[];
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y1: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y2: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const MultiAxisLineChart = ({ dataSets, labels }: MultiAxisLineChartProps) => {
  const chartData = {
    labels,
    datasets: dataSets,
  };

  return (
    <div className="flex-1 max-w-[100%] min-h-[250px] md:min-h-[450px]">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MultiAxisLineChart;
