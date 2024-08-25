import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = ({ data }) => {
  const options = {
    indexAxis: "y", // Makes the chart horizontal
    scales: {
      x: {
        stacked: true, // Stacks the bars horizontally
      },
      y: {
        stacked: true, // Stacks the bars horizontally
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="my-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
