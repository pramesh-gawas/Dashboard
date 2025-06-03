import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routers } from "./components/routers/Routers";

const URL = `https://dashboard-blue-tau.vercel.app/?vercelToolbarCode=pxw1WNrQcivIn-B`;

function App() {
  const [data, setData] = useState([]);
  //data  fetch

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const responseData = await response.json();

        const result = await responseData.data;

        {
          !data ? <p>Loading... </p> : setData(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header></Header>
      <Routers data={data}></Routers>
      <Footer></Footer>
    </>
  );
}

export default App;
