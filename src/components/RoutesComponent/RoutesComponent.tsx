import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import KorpusesPage from "../../pages/KorpusesPage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/korpuses" element={<KorpusesPage />} />
    </Routes>
  );
};

export default RoutesComponent;
