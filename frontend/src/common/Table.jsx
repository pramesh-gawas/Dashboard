import { useState } from "react";
import { TruncateText } from "../common/TruncateText";
import { useNavigate } from "react-router-dom";
export const Table = ({ graphData }) => {
  const Navigate = useNavigate();
  const [sortConfig, setSortConfig] = useState({
    key: "title",
    direction: "asc",
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...graphData].sort((a, b) => {
    if (sortConfig.key === null) {
      return 0;
    }
    const aValue = a[sortConfig.key] || "";
    const bValue = b[sortConfig.key] || "";

    let comparison = 0;
    if (typeof aValue === "string" && typeof bValue === "string") {
      comparison = aValue.localeCompare(bValue);
    } else {
      comparison = aValue - bValue;
    }

    return sortConfig.direction === "asc" ? comparison : -comparison;
  });

  const handleDetailePage = (item) => {
    Navigate(`/home/DetailePage/${item._id}`, { state: { selected: item } });
  };
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Count</th>
            <th onClick={() => handleSort("title")} scope="col">
              Title
              {sortConfig.key === "title"
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : null}
            </th>
            <th onClick={() => handleSort("sector")} scope="col">
              Sector{" "}
              {sortConfig.key === "sector"
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : null}
            </th>
            <th onClick={() => handleSort("insight")} scope="col">
              Insight{" "}
              {sortConfig.key === "insight"
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : null}
            </th>
            <th onClick={() => handleSort("likelihood")} scope="col">
              Likelihood
              {sortConfig.key === "likelihood"
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : null}
            </th>
            <th onClick={() => handleSort("source")} scope="col">
              Source
              {sortConfig.key === "source"
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : null}
            </th>
            <th onClick={() => handleSort("pestle")} scope="col">
              Pestle
              {sortConfig.key === "pestle"
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index} onClick={() => handleDetailePage(item)}>
              <th scope="row">{index + 1}</th>
              <td>{TruncateText(item.title, 30)}</td>
              <td>{item.sector}</td>
              <td>{TruncateText(item.insight, 30)}</td>
              <td>{item.likelihood}</td>
              <td>{item.source}</td>
              <td>{item.pestle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
