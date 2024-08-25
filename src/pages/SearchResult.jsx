import React from "react";
import Navbar from "../components/Navbar";
import useStore from "../store/store.js";

import { Cspm } from "../components/Dashboard/index.js";
import DoughnutChart from "../components/Charts/DoughnutChart.jsx";
import HorizontalBarChart from "../components/Charts/HorizontalBarChart.jsx";
const SearchResult = () => {
  const searchResults = useStore((state) => state.searchResults);

  console.log(searchResults);

  return (
    <div className=" bg-[#f2f5fa]">
      <Navbar />
      <div className="md:px-10 px-4 py-2 pt-8 flex items-center  justify-center gap-10 flex-wrap mt-12">
        {searchResults?.cspm.length > 0 &&
          searchResults?.cspm.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white md:px-4 px-2 md:py-2 py-1 rounded-lg flex flex-col gap-5 h-[250px] "
              >
                <p className="font-semibold ">{item.title}</p>
                <DoughnutChart data={item} />
              </div>
            );
          })}

        {searchResults?.registry.length > 0 &&
          searchResults?.registry.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white md:px-4 px-2 md:py-2 py-1 rounded-lg flex flex-col "
              >
                <p className="font-semibold">{item.title}</p>
                <HorizontalBarChart data={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchResult;
