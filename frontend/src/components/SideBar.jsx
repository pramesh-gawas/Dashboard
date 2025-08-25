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
import style from ".././components/Visuals.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
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
    const apiUrl = `https://dashboard-cyan-nine-12.vercel.app?topic=${formData.topic}&end_year=${formData.end_year}&sector=${formData.sector}&pestle=${formData.pestle}&country=${formData.country}&region=${formData.region}&source=${formData.source}&title=${formData.swot}`;

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

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");

    sidebar.style.display == "block"
      ? (sidebar.style.display = "none")
      : (sidebar.style.display = "block");
  };

  return (
    <div className="">
      <GiHamburgerMenu className={style.hamburger} onClick={toggleSidebar} />
      <div
        className={style.sidebar}
        style={{
          width: "160px",
          border: "1px solid black",
          borderRadius: "20px",
          marginLeft: "6px",
        }}
        id="sidebar"
      >
        <div className="d-flex fs-4 align-item-center justify-content-center">
          Apply Filter
        </div>
        <hr />

        <form onSubmit={dataSubmit}>
          <div className="d-flex justify-content-around">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
          {headerFilter.map((item, index) => (
            <ul className="px-3" key={index}>
              <span className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle w-100 mt-4 "
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
    </div>
  );
};
