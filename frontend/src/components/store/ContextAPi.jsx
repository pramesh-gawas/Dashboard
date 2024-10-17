import React, { createContext } from "react";
import { useState } from "react";

const MyContext = createContext({ graphData: [], handleUpdate: () => {} });
export const ContextAPi = ({ children }) => {
  const [graphData, setgraphData] = useState([]);
  return (
    <MyContext.Provider value={{ graphData, setgraphData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext };
