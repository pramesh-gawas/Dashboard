import { ContextAPi } from "../store/ContextAPi";
import { DataVisuals } from "../DataVisuals";
import { SideBar } from "../SideBar";
export const Home = ({ data }) => {
  return (
    <div className=" d-flex ms-2 me-2  ">
      <ContextAPi>
        <SideBar data={data} />
        <DataVisuals data={data} />
      </ContextAPi>
    </div>
  );
};
