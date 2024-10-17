import { useState } from "react";

export const SectorList = ({ data, setFormData, formData }) => {
  const filterData = data.filter((item) => item.sector.length !== 0);

  const uniqueValues = [
    ...new Set(filterData.map((item) => item.sector).flat()),
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const name = "select sector";

  const handleSelectChange = (event) => {
    const sector = event.target.value;
    setSelectedOptions(sector);
    setFormData({ ...formData, sector });
  };
  return (
    <select
      className="btn btn-secondary dropdown-toggle w-100"
      onChange={handleSelectChange}
    >
      <option>{name}</option>
      {uniqueValues.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  );
};
