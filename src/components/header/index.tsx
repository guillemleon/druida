import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Page } from "../layout";

interface HeaderInterface {
  displayPrimaryLinks: boolean;
  currentPage: Page;
}

function Header({ displayPrimaryLinks, currentPage }: HeaderInterface) {
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
