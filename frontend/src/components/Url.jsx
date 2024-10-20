import React, { useContext } from "react";
import { MyContext } from "./store/ContextAPi";

export const Url = () => {
  const { graphData } = useContext(MyContext);

  return (
    <div>
      {graphData.map((item, index) => (
        <li key={index} style={{ listStyle: "none" }}>
          <a target="_blank" href={item.url}>
            {item.url}
          </a>
        </li>
      ))}
    </div>
  );
};
