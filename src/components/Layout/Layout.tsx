import React, { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";
import BasketSidebar from "../BasketSidebar/BasketSidebar";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Container>{children}</Container>
      <Footer />
      <BasketSidebar />
    </div>
  );
};

export default Layout;
