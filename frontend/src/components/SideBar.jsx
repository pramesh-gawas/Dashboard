import { useState } from "react";

export const SideBar = ({ dataset }) => {
  const headerFilter = [
    "Topic",
    "End Year",
    "Sector",
    "Region",
    "Pest",
    "SWOT",
    "Source",
    "country",
    "City",
  ];

  const [useToggle, setToggle] = useState(false);
  const toggle = () => {
    setToggle(!useToggle);
  };

  const filterCheck = ["2016-2024", "2025-2036", "2040-2055", "2060-2200"];

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
          {" "}
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>

        {headerFilter.map((item) => (
          <div className="mt-4 d-flex justify-content-around">
            <button
              htmlFor=""
              className="dropdown-toggle w-100"
              onClick={toggle}
            >
              {item}

              <option
                value=""
                className="dropdown-menu "
                /*  style={{ display: useToggle ? "block" : "none" }} */
              >
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
              </option>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
