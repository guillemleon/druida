import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import styles from "./index.module.scss";

function HomeContainer() {
  return (
    <Layout
      headerConfig={{
        displayPrimaryLinks: false,
        currentPage: "home",
      }}
    >
      <div className={styles.container}>
        <Link to="/design" className={styles.left}>
          <div className={styles.overlayer}>
            <h1 className={styles.title}>
              Andrea Francín
              <p>.·. Design & Illustration .·.</p>
            </h1>
          </div>
        </Link>
        <Link to="/illustration" className={styles.right}>
          <div className={styles.overlayer}>
            <h1 className={styles.title}>
              Druida Nòmada
              <p>.·. Illustration Artist .·.</p>
            </h1>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default HomeContainer;
