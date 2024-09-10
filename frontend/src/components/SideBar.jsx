import { useState } from "react";

export const SideBar = ({ data }) => {
  console.log(data);
  const headerFilter = [
    "Topic",
    "Year",
    "Sector",
    "Region",
    "Pest",
    "SWOT",
    "Source",
    "country",
    "City",
  ];

  const filterYear = [
    2016, 2017, 2018, 2019, 2020, 2021, 2022, 2024, 2025, 2026, 2027, 2028,
    2030, 2034, 2035, 2036, 2040, 2041, 2046, 2050, 2051, 2055, 2060, 2126,
    2200,
  ];

  const [useToggle, setToggle] = useState(false);
  const toggle = () => {
    setToggle(!useToggle);
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
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span className="fs-4">Apply Filter</span>
        </a>
        <hr />
        <div className="d-flex justify-content-around">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
        {headerFilter.map((item) => (
          <button>
            {item}
            <select name="" id="">
              <option value="selct year">
                {item === "Year"
                  ? filterYear.map((year) => (
                      <>
                        <ul>
                          <li className="">
                            <label className="d-flex flex-col" htmlFor="">
                              {year + " "}
                            </label>
                            <input type="checkbox" name={year} id="" />
                          </li>
                        </ul>
                      </>
                    ))
                  : ""}
              </option>
            </select>
          </button>
        ))}
      </div>
    </>
  );
};
