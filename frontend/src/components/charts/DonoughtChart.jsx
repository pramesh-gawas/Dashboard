import { Chart as ChartJS } from "chart.js/auto";
import { useState, useContext, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { MyContext } from "../store/ContextAPi";
export const DonoughtChart = () => {
  const { graphData } = useContext(MyContext);
  const filterData = graphData.filter((item) => item.topic !== "");
  const Values = filterData.map((item) => item.topic);
  const newvalues = Values.flat();
  const uniqvalues = [...new Set(newvalues)];

  const [topicData, setTopicData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Process the JSON data and prepare it for Chart.js
    const labels = graphData.map((item) => item.sector);
    const values = graphData.map((item) => item.intensity);

    setTopicData({
      labels,
      datasets: [
        {
          // label: uniqvalues.map((item) => item),
          data: values,

          height: 600,
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
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Set to false to maintain aspect ratio
    height: 400,
    plugins: {
      title: {
        display: true,
        text: "Distribution of Data by Sector",
        color: "blue",
        font: {
          size: "30px",
        },
      },
    },
  };

  return <Doughnut data={topicData} options={chartOptions}></Doughnut>;
};
