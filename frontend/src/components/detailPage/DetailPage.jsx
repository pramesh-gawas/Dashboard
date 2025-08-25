import { useLocation } from "react-router-dom";
import { CardBasic } from "../../common/CardBasic";
export const DetailPage = () => {
  const location = useLocation();
  const { selected } = location.state;
  console.log(selected);
  return (
    <>
      <center>
        <h2 className="m-3">Detail page</h2>
      </center>
      <div className="container text-center">
        <div className="row">
          <div className="col-8">
            <CardBasic title={"Title"} cardValue={selected.title}></CardBasic>
            <CardBasic
              title={"Url"}
              cardValue={
                <a
                  href={selected.url}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  {selected.url}
                </a>
              }
            ></CardBasic>
          </div>
          <div className="col-4">
            <div className="col">
              <CardBasic
                title={"Insight"}
                cardValue={selected.insight}
              ></CardBasic>
            </div>
            <CardBasic title={"Source"} cardValue={selected.source}></CardBasic>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CardBasic title={"topic"} cardValue={selected.topic}></CardBasic>
          </div>
          <div className="col">
            <CardBasic
              title={"End Year"}
              cardValue={selected.end_year}
            ></CardBasic>
          </div>
          <div className="col">
            <CardBasic
              title={"Start Year"}
              cardValue={selected.start_year}
            ></CardBasic>
          </div>
          <div className="col">
            {" "}
            <CardBasic
              title={"intensity"}
              cardValue={selected.intensity}
            ></CardBasic>
          </div>
          <div className="col">
            {" "}
            <CardBasic title={"sector"} cardValue={selected.sector}></CardBasic>
          </div>
          <div className="col">
            {" "}
            <CardBasic
              title={"Country"}
              cardValue={selected.country}
            ></CardBasic>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <CardBasic
              title={"Relevence"}
              cardValue={selected.relevence}
            ></CardBasic>
          </div>
          <div className="col">
            <CardBasic title={"region"} cardValue={selected.region}></CardBasic>
          </div>
          <div className="col">
            {" "}
            <CardBasic title={"pestle"} cardValue={selected.pestle}></CardBasic>
          </div>
          <div className="col">
            {" "}
            <CardBasic title={"Impact"} cardValue={selected.impact}></CardBasic>
          </div>
          <div className="col">
            {" "}
            <CardBasic title={"Added"} cardValue={selected.added}></CardBasic>
          </div>
          <div className="col">
            {" "}
            <CardBasic
              title={"Publish"}
              cardValue={selected.published}
            ></CardBasic>
          </div>
        </div>
      </div>
    </>
  );
};
