import React, { useContext, useState } from "react";
import { MyContext } from "./store/ContextAPi";

export const Sources = () => {
  const { graphData } = useContext(MyContext);
  const filter = graphData.map((item) => item.source);
  return (
    <div>
      {filter.map((item, index) => (
        <li key={index} style={{ listStyle: "none" }}>
          {item}
        </li>
      ))}
    </div>
  );
};
