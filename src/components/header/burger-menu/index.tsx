// BurgerMenu.tsx
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import useHover from "../../../hooks/useHover";
import logoWhite from "../../../assets/images/logo/logo_white.png";
import logoColor from "../../../assets/images/logo/logo_color.png";

const BurgerMenu: React.FC = () => {
  const { ref, isHovered } = useHover();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => setIsOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles.logoContainer}>
        <Link to="/" ref={ref}>
          <img
            src={isHovered ? logoColor : logoWhite}
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div className={`${styles.menuItems} ${isOpen ? styles.show : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/design">Design & Illustration</a>
          </li>
          <li>
            <a href="/illustration">Illustration Artist</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
