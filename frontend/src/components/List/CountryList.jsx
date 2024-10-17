import { useState } from "react";

export const CountryList = ({ data, setFormData, formData }) => {
  const filterData = data.filter((item) => item.country !== 0);

  const uniqueValues = [
    ...new Set(filterData.map((item) => item.country).flat()),
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const name = "select country";
  const handleSelectChange = (event) => {
    const country = event.target.value;
    setSelectedOptions(country);
    setFormData({ ...formData, country });
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
