import { BarChart } from "./charts/BarChart";
import { DonoughtChart } from "./charts/DonoughtChart";
import { ScatterChart } from "./charts/ScatterChart";
import { LineChart } from "./charts/LineChart";
import { Sources } from "./Sources";
import { Url } from "./Url";

export const DataVisuals = () => {
  return (
    <main className="">
      <div className="d-flex  mt-2">
        <div className="row ms-2 me-2 g-2 ">
          <div className="col-12 border" style={{ height: "320px" }}>
            <BarChart></BarChart>
          </div>
          <div className="col-12 border" style={{ height: "320px" }}>
            <DonoughtChart></DonoughtChart>
          </div>

          <div className="col-12 border" style={{ height: "320px" }}>
            <LineChart></LineChart>
          </div>

          <div className=" col-12 border" style={{ height: "320px" }}>
            <ScatterChart></ScatterChart>
          </div>
        </div>
        <div className="col-3 border d-flex justify-content-center text-align-center">
          <Sources></Sources>
        </div>
      </div>
      <div className="border ms-2 ">
        <Url></Url>
      </div>
    </main>
  );
};
