import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = ({ data }) => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Set to false to maintain aspect ratio
  };
  const [userData, setUserData] = useState({
    labels: data.map((data) => data.region),
    datasets: [
      {
        label: "Region",
        data: [10, 20, 30, 40, 50],
      },
    ],
  });

  return <Pie data={userData} options={chartOptions}></Pie>;
};
