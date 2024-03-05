import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import KorpusesPage from "../../pages/KorpusesPage";
import DetailsPage from "../../pages/DetailsPage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/Suren/korpus/" element={<HomePage />} />
      <Route path="/Suren/korpus/korpuses" element={<KorpusesPage />} />
      <Route path="/Suren/korpus/korpuses/details" element={<DetailsPage />} />
    </Routes>
  );
};

export default RoutesComponent;
