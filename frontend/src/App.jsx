import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { SideBar } from "./components/SideBar";
import { DataVisuals } from "./components/DataVisuals";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const URL = "http://localhost:8000/all";

function App() {
  const [data, setdata] = useState("");

  //data  fetch
  const dataFetch = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      const arrayData = result.data;
      setdata(arrayData);
    } catch (error) {
      console.error();
    }
  };
  console.log(data);

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="d-flex  ms-2 me-2  ">
        <SideBar data={data} />
        <DataVisuals />
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
