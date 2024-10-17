import React, { useContext } from "react";
import { MyContext } from "./store/ContextAPi";

export const Url = () => {
  const { graphData } = useContext(MyContext);

  return (
    <div>
      {graphData.map((item) => (
        <li style={{ listStyle: "none" }}>
          <a href={item.url}>{item.url}</a>
        </li>
      ))}
    </div>
  );
};
