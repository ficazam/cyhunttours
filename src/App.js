import React from "react";
import { Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Tour } from "./pages/Tour";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tours/tour:id" element={<Tour />} />
      </Routes>
    </>
  );
};

export default App;
