import React from "react";
import { Navbar, Cspm, Cwpp, RegistryScan } from "./Dashboard/index.js";

const Dashboard = () => {
  return (
    <div className="md:px-10 px-4 py-2 pt-8">
      <Navbar />
      <div className="sm:px-2">
        <Cspm />
        <Cwpp />
        <RegistryScan />
      </div>
    </div>
  );
};

export default Dashboard;
