import { useState } from "react";

export const Swot = ({ data, setFormData, formData }) => {
  const filterData = data.filter((item) => item.title !== "");

  const uniqueValues = [
    ...new Set(filterData.map((item) => item.title).flat()),
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const name = "select swot";
  const handleSelectChange = (event) => {
    const swot = event.target.value;
    setSelectedOptions(swot);
    setFormData({ ...formData, swot });
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
