export const YearList = ({ data, setFormData, formData }) => {
  const filterData = data.filter((item) => item.end_year !== null);
  const uniqueValues = [...new Set(filterData.map((item) => item.end_year))];
  const sortedData = uniqueValues.sort();
  const name = "select year";

  const handleYearChange = (event) => {
    const end_year = parseInt(event.target.value);
    setFormData({ ...formData, end_year });
  };
  return (
    <select
      className="btn btn-secondary dropdown-toggle w-100"
      onChange={handleYearChange}
    >
      <option>{name}</option>
      {sortedData.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  );
};
