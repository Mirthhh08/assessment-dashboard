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
    indexAxis: "y", 
    scales: {
      x: {
        stacked: true, 
      },
      y: {
        stacked: true, 
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
    <div className="my-4 flex-col gap-4">
      <p className="text-sm">
        <span className="text-lg font-semibold mr-1">{data.total}</span> {data.desc}
      </p>
      <Bar data={data.data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
