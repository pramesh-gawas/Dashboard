import { createContext, useContext, useEffect, useState } from "react";
import { YearList } from "./List/YearList";
import { TopicList } from "./List/TopicList";
import { SectorList } from "./List/SectorList";
import { RegionList } from "./List/RegionList";
import { PestList } from "./List/PestList";
import { SourceList } from "./List/SourceList";
import { CountryList } from "./List/CountryList";
import { Swot } from "./List/Swot";
import { CityList } from "./List/CityList";
import axios from "axios";
import { MyContext } from "./store/ContextAPi";

export const SideBar = ({ data }) => {
  const { setgraphData } = useContext(MyContext);

  const handleUpdate = (data) => {
    setgraphData(data);
  };

  const headerFilter = [
    "Year",
    "Topic",
    "Sector",
    "Region",
    "Pest",
    "Swot",
    "Source",
    "Country",
    "City",
  ];
  const [activeDropdowns, setActiveDropdowns] = useState(
    new Array(headerFilter.length).fill(false) // Initialize all as closed
  );
  const [formData, setFormData] = useState({
    end_year: Number,
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    source: "",
    country: "",
    swot: "",
  });

  const resetFormdata = () => {
    setFormData({
      end_year: null,
      topic: "",
      sector: "",
      region: "",
      pestle: "",
      source: "",
      country: "",
      swot: "",
    });
  };
  const dataSubmit = (event) => {
    event.preventDefault();
    const apiUrl = `https://dashboard-blue-tau.vercel.app/?vercelToolbarCode=pxw1WNrQcivIn-B?topic=${formData.topic}&end_year=${formData.end_year}&sector=${formData.sector}&pestle=${formData.pestle}&country=${formData.country}&region=${formData.region}&source=${formData.source}&title=${formData.swot}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const { data } = response.data;
        {
          data.length === 0 ? alert("no! data found") : handleUpdate(data);
        }

        resetFormdata();
        event.target.reset();
      })
      .catch((error) => alert("Please select a year"));
  };

  const handleDropdownToggle = (index) => {
    // Update the state for the clicked dropdown only
    const newActiveDropdowns = [...activeDropdowns];
    newActiveDropdowns[index] = !newActiveDropdowns[index]; // Toggle state
    setActiveDropdowns(newActiveDropdowns);
  };

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark "
        style={{ width: "230px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Apply Filter</span>
        </a>
        <hr />

        <form onSubmit={dataSubmit}>
          <div className="d-flex justify-content-around">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
          {headerFilter.map((item, index) => (
            <ul key={index}>
              <span className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle w-100 mt-4"
                  type="button"
                  id={index}
                  data-mdb-toggle="dropdown"
                  aria-expanded={activeDropdowns[index]}
                  onClick={() => handleDropdownToggle(index)}
                >
                  {item}
                </button>

                {activeDropdowns[index] && ( // Render content only for active dropdown
                  <>
                    {item === "Year" && (
                      <YearList
                        setFormData={setFormData}
                        formData={formData}
                        data={data}
                      />
                    )}
                    {item === "Topic" && (
                      <TopicList
                        setFormData={setFormData}
                        formData={formData}
                        data={data}
                      />
                    )}
                    {item === "Sector" && (
                      <SectorList
                        setFormData={setFormData}
                        formData={formData}
                        data={data}
                      />
                    )}
                    {item === "Region" && (
                      <RegionList
                        setFormData={setFormData}
                        formData={formData}
                        data={data}
                      />
                    )}
                    {item === "Source" && (
                      <SourceList
                        setFormData={setFormData}
                        formData={formData}
                        data={data}
                      />
                    )}
                    {item === "Country" && (
                      <CountryList
                        setFormData={setFormData}
                        formData={formData}
                        data={data}
                      />
                    )}
                    {item === "City" && (
                      <CityList
                        setFormData={setFormData}
                        formData={formData}
                        data={data}
                      />
                    )}
                    {item === "Pest" && (
                      <PestList
                        setFormData={setFormData}
                        formData={formData}
                        data={data}
                      />
                    )}
                    {item === "Swot" && (
                      <Swot
                        setFormData={setFormData}
                        formData={formData}
                        data={data}
                      />
                    )}
                  </>
                )}
              </span>
            </ul>
          ))}
        </form>
      </div>
    </>
  );
};
