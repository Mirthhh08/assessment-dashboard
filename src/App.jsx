import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchResult from "./pages/SearchResult.jsx"
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search-result/:query" element={<SearchResult/>}/>
      </Routes>
    </>
  );
};

export default App;
