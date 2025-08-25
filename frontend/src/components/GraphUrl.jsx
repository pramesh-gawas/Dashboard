import React, { useContext } from "react";
import { MyContext } from "./store/ContextAPi";

export const GraphUrl = () => {
  const { graphData } = useContext(MyContext);

  return (
    <div>
      <h2>Important Links</h2>
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
