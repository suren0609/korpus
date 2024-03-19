import React, { useEffect, useLayoutEffect } from "react";
import Layout from "../Layout";
import RoutesComponent from "../RoutesComponent";
import styles from "./App.module.scss";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log("render");

  return (
    <div className={styles.App}>
      <Layout>
        <RoutesComponent />
      </Layout>
    </div>
  );
}

export default App;
