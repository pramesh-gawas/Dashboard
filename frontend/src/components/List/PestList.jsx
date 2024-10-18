import { useState } from "react";

export const PestList = ({ data, setFormData, formData }) => {
  const filterData = data.filter((item) => item.pestle !== "");

  const uniqueValues = [
    ...new Set(filterData.map((item) => item.pestle).flat()),
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const name = "select pestle";
  const handleSelectChange = (event) => {
    const Pestle = event.target.value;
    setSelectedOptions(Pestle);
    setFormData({ ...formData, Pestle });
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
