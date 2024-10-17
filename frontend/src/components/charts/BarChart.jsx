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
    maintainAspectRatio: false, // Set to false to maintain aspect ratio
  };

  useEffect(() => {
    // Process the JSON data and prepare it for Chart.js
    const labels = graphData.map((item) => item.insight);
    const values = graphData.map((item) => item.relevance);
    setChartData({
      labels,
      datasets: [
        {
          label: "relevance",
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54,162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [graphData]);

  return <Bar data={chartData} options={chartOptions}></Bar>;
};
