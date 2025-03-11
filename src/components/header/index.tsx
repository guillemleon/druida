import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Page } from "../layout";
import logoWhite from "../../assets/images/logo/logo_white.png";
import logoColor from "../../assets/images/logo/logo_color.png";
import useHover from "../../hooks/useHover";

interface HeaderInterface {
  displayPrimaryLinks: boolean;
  currentPage: Page;
}

function Header({ displayPrimaryLinks, currentPage }: HeaderInterface) {
  const { ref, isHovered } = useHover();

  return (
    <header className={styles.container}>
      <nav className={styles.content}>
        {displayPrimaryLinks && (
          <Link
            to="/design"
            className={`${styles.primaryLink} ${
              currentPage === "design" ? styles.selected : ""
            }`}
          >
            Andrea Francín
            <p>.·. Design & Illustration .·.</p>
          </Link>
        )}
        <div className={styles.listContainer}>
          <ul className={styles.secondaryLinkList}>
            <li>
              <Link
                to="/about"
                className={`${styles.secondaryLink} ${
                  currentPage === "about" ? styles.selected : ""
                }`}
              >
                .·. About .·.
              </Link>
            </li>
            <li ref={ref}>
              <Link to="/">
                <img
                  src={isHovered ? logoColor : logoWhite}
                  className={styles.logo}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${styles.secondaryLink} ${
                  currentPage === "contact" ? styles.selected : ""
                }`}
              >
                .·. Contact .·.
              </Link>
            </li>
          </ul>
        </div>
        {displayPrimaryLinks && (
          <Link
            to="/illustration"
            className={`${styles.primaryLink} ${
              currentPage === "illustration" ? styles.selected : ""
            }`}
          >
            Druida Nòmada
            <p>.·. Illustration Artist .·.</p>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
