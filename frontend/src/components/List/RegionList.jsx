import { useState } from "react";

export const RegionList = ({ data, setFormData, formData }) => {
  const filterData = data.filter((item) => item.region !== 0);

  const uniqueValues = [
    ...new Set(filterData.map((item) => item.region).flat()),
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const name = "select region";
  const handleSelectChange = (event) => {
    const region = event.target.value;
    setSelectedOptions(region);
    setFormData({ ...formData, region });
  };
  return (
    <select
      className="btn btn-secondary dropdown-toggle w-100"
      onChange={handleSelectChange}
    >
      <option value="">{name}</option>
      {uniqueValues.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  );
};
