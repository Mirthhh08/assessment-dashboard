import React from "react";
import AddWidget from "./components/AddWidget";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import useStore from "./store/store";
const App = () => {
  const toggleWidget = useStore((state) => state.widgetMenu);

  return (
    <div className="">
      <Navbar />
      <Home />

      {toggleWidget && <AddWidget />}
    </div>
  );
};

export default App;
