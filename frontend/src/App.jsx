import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SideBar } from "./components/SideBar";
import { DataVisuals } from "./components/DataVisuals";
import { Header } from "./components/Header";
const dataSet = [
  {
    end_year: "",
    intensity: 6,
    sector: "",
    topic: "market",
    insight: "N-Hexane Market Hit at a CAGR of 5% by 2024 - PMR Report",
    url: "http://www.sbwire.com/press-releases/n-hexane-market-hit-at-a-cagr-of-…",
    region: "World",
    start_year: "",
    impact: "",
    added: "January, 19 2017 00:55:54",
    published: "January, 18 2017 00:00:00",
    country: "",
    relevance: 2,
    pestle: "Economic",
    source: "SBWire",
    title:
      "Polymerization will remain top 3 end-users in global n-Hexane Market.",
    likelihood: 3,
  },
];

function App() {
  return (
    <>
      <Header></Header>
      <SearchBar />
      <class className="container">
        <SideBar />
        <DataVisuals />
      </class>
    </>
  );
}

export default App;
