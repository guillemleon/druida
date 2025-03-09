import React from "react";
import Layout, { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import styles from "./index.module.scss";
import Gallery from "../../components/gallery";
import { illustrationProjects } from "../../config/projects";

function IllustrationContainer() {
  return (
    <Layout
      headerConfig={{
        currentPage: PAGE_IDS.illustration as Page,
      }}
    >
      <div className={styles.overlayer} />
      <div className={styles.background} />
      <div className={styles.container}>
        <h1 className={styles.title}>.·. Art .·.</h1>
        <Gallery items={illustrationProjects} />
      </div>
    </Layout>
  );
}

export default IllustrationContainer;
