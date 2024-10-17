import { Chart as ChartJS } from "chart.js/auto";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { MyContext } from "../store/ContextAPi";

export const LineChart = () => {
  const { graphData } = useContext(MyContext);
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Process the JSON data and prepare it for Chart.js
    const labels = graphData.map((item) => item.insight);
    const values = graphData.map((item) => item.relevance);

    setUserData({
      labels,
      datasets: [
        {
          label: graphData.map((item) => item.insight),
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
            "#21832e",
            "#72294e",
            "#549b43",
            "#b4b2bd",
            "#8cb41c",
            "#bdab7e",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [graphData]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Set to false to maintain aspect ratio
    height: 400,
  };

  return <Line data={userData} options={chartOptions}></Line>;
};
