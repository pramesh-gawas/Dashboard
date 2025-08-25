import { ContextAPi } from "../store/ContextAPi";
import { DataVisuals } from "../DataVisuals";
import { SideBar } from "../SideBar";
import { useFetchData } from "../../dataFetch/useFetchData";
export const Home = () => {
  const URL = `https://dashboard-cyan-nine-12.vercel.app`;

  const data = useFetchData(URL);

  return (
    <div className=" d-flex">
      <ContextAPi>
        <SideBar data={data} />
        <DataVisuals data={data} />
      </ContextAPi>
    </div>
  );
};
