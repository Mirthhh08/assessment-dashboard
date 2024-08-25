import React from "react";
import { Navbar, Cspm, Cwpp, RegistryScan } from "./Dashboard/index.js";
import DoughnutChart from "./Charts/DoughnutChart.jsx";
import HorizontalBarChart from "./Charts/HorizontalBarChart.jsx";

import useStore from "../store/store.js";
const Dashboard = () => {
  const data = useStore((state) => state.categories);
  return (
    <div className="md:px-10 px-4 py-2 pt-8">
      <Navbar />
      <div className="sm:px-2">
        <Cspm
          title={"CSPM Executive Dashboard"}
          data={data?.cspm}
          Chart={DoughnutChart}
        />
        <Cspm
          title={"CWPP Dashboard"}
          data={data?.cwpp}
          Chart={HorizontalBarChart}
        />

        <Cspm
          title={"Registry Scan"}
          data={data?.registry}
          Chart={HorizontalBarChart}
        />
      </div>
    </div>
  );
};

export default Dashboard;
