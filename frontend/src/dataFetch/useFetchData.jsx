import { useState, useEffect } from "react";

export const useFetchData = (URL, dependencies = []) => {
  const [data, setData] = useState([]);
  //data  fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const responseData = await response.json();
        const result = await responseData.data;

        {
          !data ? <p>Loading... </p> : setData(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [URL, ...dependencies]);

  return data;
};
