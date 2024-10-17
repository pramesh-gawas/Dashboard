import { useState } from "react";

export const SourceList = ({ data, setFormData, formData }) => {
  const filterData = data.filter((item) => item.source !== 0);

  const uniqueValues = [
    ...new Set(filterData.map((item) => item.source).flat()),
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const name = "select source";

  const handleSelectChange = (event) => {
    const source = event.target.value;
    setSelectedOptions(source);
    setFormData({ ...formData, source });
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
