import { ContextAPi } from "../store/ContextAPi";
import { DataVisuals } from "../DataVisuals";
import { SideBar } from "../SideBar";
import { useFetchData } from "../../dataFetch/useFetchData";
export const Home = () => {
  const URL = `https://dashboard-blue-tau.vercel.app/?vercelToolbarCode=pxw1WNrQcivIn-B`;

  const data = useFetchData(URL);

  return (
    <div className=" d-flex ms-2 me-2  ">
      <ContextAPi>
        <SideBar data={data} />
        <DataVisuals data={data} />
      </ContextAPi>
    </div>
  );
};
