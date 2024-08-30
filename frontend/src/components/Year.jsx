import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
export const Year = () => {
  const myElementRef = useRef(null);

  const [barData, setBarData] = useState([
    { name: "john Doe", age: 50 },
    { name: "john Doe", age: 50 },
    { name: "john Doe", age: 50 },
  ]);

  const maxAge = d3.max(barData, (d) => d.age);
  console.log({ maxAge });
  const totalHeight = maxAge * 50;
  const recWidth = 50;

  const rectWidth = 50;
  const toleHeight = 100;
  useEffect(() => {
    const svg = d3.select(myElementRef.current);

    const fireRectDatum = svg.select("rect").datum(barData);

    const allRectData = svg.selectAll("rect").data(barData);
    allRectData

      .attr("width", rectWidth)
      .attr("stroke-width", 3)
      .attr("stroke-dasharray", "5 5")
      .attr("stroke", "red")

      .attr("x", (d, i) => {
        return i * rectWidth;
      })

      .attr("height", (d) => {
        return d;
      })

      .attr("y", (d) => {
        const barY = toleHeight - d;
        return barY;
      });
  }, []);

  return <div>tag</div>;
};
