import { Chart as ChartJS } from "chart.js/auto";
import { useContext, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { MyContext } from "../store/ContextAPi";

export const BarChart = () => {
  const { graphData } = useContext(MyContext);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Total Intensity by Sector",
        color: "blue",
        font: {
          size: "30px",
        },
      },
    },
  };

  useEffect(() => {
    // Process the JSON data and prepare it for Chart.js
    const labels = graphData.map((item) => item.sector);
    const values = graphData.map((item) => item.intensity);
    setChartData({
      labels,
      datasets: [
        {
          label: "Most Impactful",
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)", // Vibrant Red
            "rgba(54, 162, 235, 0.8)", // Bright Blue
            "rgba(255, 206, 86, 0.8)", // Sunny Yellow
            "rgba(75, 192, 192, 0.8)", // Bright Teal
            "rgba(153, 102, 255, 0.8)", // Rich Purple
            "rgba(255, 159, 64, 0.8)", // Warm Orange
            "rgba(255, 0, 255, 0.8)", // Vivid Magenta
            "rgba(0, 255, 0, 0.8)",
          ],
          borderColor: ["black"],
          borderWidth: 1,
        },
      ],
    });
  }, [graphData]);

  return <Bar data={chartData} options={chartOptions}></Bar>;
};
