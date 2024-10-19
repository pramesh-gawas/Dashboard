import React, { createContext } from "react";
import { useState } from "react";

const MyContext = createContext({ graphData: [], handleUpdate: () => {} });
export const ContextAPi = ({ children }) => {
  const [graphData, setgraphData] = useState([
    {
      _id: "66d5bf11a372c5ea7f7940e4",
      end_year: 2016,
      intensity: 12,
      sector: "Financial services",
      topic: ["oil"],
      insight:
        "Saudi Arabia: Growth to moderate as the kingdom embarks on fiscal consolidation",
      url: "http://www.kuwait.nbk.com/InvestmentAndBrokerage/ResearchandReports/$Document/MonthlyBriefs/en-gb/MainCopy/$UserFiles/NBKKSAMacro20160403E.pdf",
      region: "",
      start_year: null,
      impact: "",
      added: "December, 02 2016 13:22:39",
      published: "April, 03 2016 00:00:00",
      country: "",
      relevance: 3,
      pestle: "Economic",
      source: "nbk",
      title:
        "Saudi Arabia's growth is forecast to slow from 3.4% in 2015 to 1.6% in 2016 amid lower oil prices and renewed fiscal restraint.",
      likelihood: 4,
    },
    {
      _id: "66d5bf11a372c5ea7f794108",
      end_year: 2016,
      intensity: 12,
      sector: "Energy",
      topic: ["growth"],
      insight: "World Bank Document",
      url: "http://documents.worldbank.org/curated/en/409591474983005625/pdf/108525-REVISED-PUBLIC.pdf",
      region: "",
      start_year: null,
      impact: "",
      added: "November, 22 2016 08:05:55",
      published: "October, 04 2016 00:00:00",
      country: "",
      relevance: 3,
      pestle: "Economic",
      source: "World Bank Group",
      title:
        "Hydrocarbon GDP growth is expected to slow down to 2 percent in 2016 from an estimated 4.6 percent in 2015.",
      likelihood: 4,
    },
    {
      _id: "66d5bf11a372c5ea7f79410e",
      end_year: 2016,
      intensity: 12,
      sector: "Energy",
      topic: ["oil"],
      insight: "World Bank Document",
      url: "http://documents.worldbank.org/curated/en/409591474983005625/pdf/108525-REVISED-PUBLIC.pdf",
      region: "",
      start_year: null,
      impact: "",
      added: "November, 22 2016 08:05:41",
      published: "October, 04 2016 00:00:00",
      country: "",
      relevance: 3,
      pestle: "Economic",
      source: "World Bank Group",
      title:
        "Lower oil sector investment in 2016 in Oman is expected to slow hydrocarbon GDP growth to 1.1 percent from 4 percent in 2015.",
      likelihood: 4,
    },
    {
      _id: "66d5bf11a372c5ea7f79412b",
      end_year: 2016,
      intensity: 6,
      sector: "Energy",
      topic: ["oil"],
      insight:
        "World Energy Outlook 2016 - Executive Summary - English version",
      url: "http://www.iea.org/publications/freepublications/publication/WorldEnergyOutlook2016ExecutiveSummaryEnglish.pdf",
      region: "",
      start_year: null,
      impact: "",
      added: "November, 18 2016 04:24:04",
      published: "October, 27 2016 00:00:00",
      country: "",
      relevance: 3,
      pestle: "Economic",
      source: "IEA",
      title:
        "A near-term risk to oil markets could arise from the opposite direction if the cuts in upstream spending in 2015-2016 are prolonged for another year.",
      likelihood: 2,
    },
  ]);
  console.log(graphData);
  return (
    <MyContext.Provider value={{ graphData, setgraphData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext };
