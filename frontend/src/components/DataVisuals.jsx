import { BarChart } from "./charts/BarChart";
import { DonoughtChart } from "./charts/DonoughtChart";
import { ScatterChart } from "./charts/ScatterChart";
import { LineChart } from "./charts/LineChart";
import { Sources } from "./Sources";
import { GraphUrl } from "./GraphUrl";
import { CardBasic } from "../common/CardBasic";
import { MyContext } from "./store/ContextAPi";
import { useContext } from "react";
import { Table } from "../common/Table";
export const DataVisuals = ({ data }) => {
  const { graphData } = useContext(MyContext);
  const intensitySum = graphData?.reduce((total, currentItem) => {
    const intensityValue = Number(currentItem.intensity) || 0;
    return total + intensityValue;
  }, 0);
  const averageIntensity = intensitySum / graphData?.length;

  const likelihoodSum = graphData?.reduce((total, currentItem) => {
    const intensityValue = Number(currentItem.likelihood) || 0;
    return total + intensityValue;
  }, 0);
  const averageLikelihood = likelihoodSum / graphData?.length;
  return (
    <>
      <main className="col-md-10 container-fluid ">
        <div className="row ">
          <div className="col-lg-12 col-md-12">
            <div className="row g-2">
              <div className="row">
                <div className="col">
                  <CardBasic
                    title={"Average Intensity"}
                    cardValue={averageIntensity.toFixed(2)}
                  ></CardBasic>
                </div>
                <div className="col">
                  <CardBasic
                    title={"Average Likelihood"}
                    cardValue={averageLikelihood.toFixed(2)}
                  ></CardBasic>
                </div>
                <div className="col">
                  <CardBasic
                    title={"Total Record"}
                    cardValue={data?.length}
                  ></CardBasic>
                </div>
                <div className="col">
                  <CardBasic
                    title={"Year"}
                    cardValue={graphData?.[0]?.end_year}
                  ></CardBasic>
                </div>
              </div>
              <div className="col-lg-12 border" style={{ height: "320px" }}>
                <BarChart></BarChart>
              </div>
              <div className="col-lg-12 border" style={{ height: "320px" }}>
                <DonoughtChart></DonoughtChart>
              </div>
              {/* <div className="col-lg-12 border" style={{ height: "320px" }}>
                <LineChart></LineChart>
              </div>
              <div className="col-lg-12 border" style={{ height: "320px" }}>
                <ScatterChart></ScatterChart>
              </div> */}
              <div className="col-lg-12 overflow-auto">
                <Table graphData={graphData}></Table>
              </div>
              {/* <div className="col-lg-12 border">
                <Sources></Sources>
              </div>
              <div className="col-lg-12 border overflow-scroll">
                <GraphUrl></GraphUrl>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
