import { BarChart } from "./charts/BarChart";
import { DonoughtChart } from "./charts/DonoughtChart";
import { ScatterChart } from "./charts/ScatterChart";
import { LineChart } from "./charts/LineChart";
import { Sources } from "./Sources";
import { Url } from "./Url";

export const DataVisuals = () => {
  return (
    <>
      <main className="col-md-9 container-fluid ">
        <div className="row ">
          <div className="col-lg-9 col-md-12">
            <div className="row g-2">
              <div className="col-12 border" style={{ height: "320px" }}>
                <BarChart></BarChart>
              </div>
              <div className="col-lg-12 border" style={{ height: "320px" }}>
                <DonoughtChart></DonoughtChart>
              </div>
              <div className="col-lg-12 border" style={{ height: "320px" }}>
                <LineChart></LineChart>
              </div>
              <div className="col-lg-12 border" style={{ height: "320px" }}>
                <ScatterChart></ScatterChart>
              </div>
            </div>
          </div>
          <div className="col-lg-3 border d-flex justify-content-center text-align-center">
            <Sources></Sources>
          </div>
        </div>
        <div className="row mt-2 overflow-scroll">
          <div className="col-12">
            <Url></Url>
          </div>
        </div>
      </main>
    </>
  );
};
