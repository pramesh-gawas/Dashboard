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
    const labels = graphData.map((item) => item.insight);
    const values = graphData.map((item) => item.intensity);

    setTopicData({
      labels,
      datasets: [
        {
          label: uniqvalues.map((item) => item),
          data: values,

          height: 600,
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

  return <Doughnut data={topicData} options={chartOptions}></Doughnut>;
};
