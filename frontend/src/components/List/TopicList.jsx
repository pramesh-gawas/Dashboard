import { useState } from "react";

export const TopicList = ({ data, setFormData, formData }) => {
  const filterData = data.filter((item) => item.topic !== "");

  const uniqueValues = [
    ...new Set(filterData.map((item) => item.topic).flat()),
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const name = "select topic";
  const handleSelectChange = (event) => {
    const topic = event.target.value;
    setSelectedOptions(topic);
    setFormData({ ...formData, topic });
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
