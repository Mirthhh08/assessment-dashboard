import React from "react";
import Navbar from "../components/Navbar.jsx";
import Dashboard from "../components/Dashboard.jsx";
import AddWidget from "../components/AddWidget.jsx";
import useStore from "../store/store.js"
const Home = () => {
  const toggleWidget = useStore((state) => state.widgetMenu);

  return (
    <div className="bg-[#f2f5fa]">
      <Navbar />
      <Dashboard />
      {toggleWidget && <AddWidget />}
    </div>
  );
};

export default Home;
