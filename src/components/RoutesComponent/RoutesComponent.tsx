import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import KorpusesPage from "../../pages/KorpusesPage";
import DetailsPage from "../../pages/DetailsPage";
import { ROOT_PATH } from "../../rootPath";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={`${ROOT_PATH}/`} element={<HomePage />} />
      <Route path={`${ROOT_PATH}/korpuses`} element={<KorpusesPage />} />
      <Route path={`${ROOT_PATH}/korpuses/details`} element={<DetailsPage />} />
    </Routes>
  );
};

export default RoutesComponent;
