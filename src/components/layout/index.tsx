import React from "react";
import styles from "./index.module.scss";
import Header from "../header";
import useIsMobile from "../../hooks/useIsMobile";
import BurgerMenu from "../header/burger-menu";

export type Page = "about" | "home" | "contact" | "design" | "illustration";

interface LayoutInterface {
  headerConfig?: {
    displayPrimaryLinks?: boolean;
    currentPage?: Page;
  };
  children: React.ReactNode;
}

function Layout({ headerConfig, children }: LayoutInterface) {
  const isMobile = useIsMobile();

  const { displayPrimaryLinks = true, currentPage = "home" } =
    headerConfig || {};

  return (
    <div className={styles.container}>
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <Header
          currentPage={currentPage}
          displayPrimaryLinks={displayPrimaryLinks}
        />
      )}
      {children}
    </div>
  );
}

export default Layout;
