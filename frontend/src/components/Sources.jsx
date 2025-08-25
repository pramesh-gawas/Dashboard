import React, { useContext, useState } from "react";
import { MyContext } from "./store/ContextAPi";

export const Sources = () => {
  const { graphData } = useContext(MyContext);
  const filter = graphData.map((item) => item.source);
  return (
    <div>
      <h2>Sources</h2>
      {filter.map((item, index) => (
        <li key={index} style={{ listStyle: "i" }}>
          {item}
        </li>
      ))}
    </div>
  );
};
