import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { SideBar } from "./components/SideBar";
import { DataVisuals } from "./components/DataVisuals";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ContextAPi } from "./components/store/ContextAPi";

const URL = `http://localhost:8000/`;
/*   `https://dashboard-orpin-tau-34.vercel.app/`; */

function App() {
  const [data, setData] = useState([]);
  const [visualData, setVisualData] = useState([]);

  //data  fetch

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        const result = await data.data;

        {
          !data ? <p>Loading </p> : setData(result);
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
      <div className="d-flex  ms-2 me-2  ">
        <ContextAPi>
          <SideBar data={data} />
          <DataVisuals data={data} />
        </ContextAPi>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
