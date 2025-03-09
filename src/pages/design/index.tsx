import React, { useState } from "react";
import Layout, { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import styles from "./index.module.scss";
import Gallery from "../../components/gallery";
import { designProjects } from "../../config/projects";

function DesignContainer() {
  return (
    <Layout
      headerConfig={{
        currentPage: PAGE_IDS.design as Page,
      }}
    >
      <div className={styles.overlayer} />
      <div className={styles.background} />
      <div className={styles.container}>
        <h1 className={styles.title}>.·. Projects .·.</h1>
        <Gallery items={designProjects} />
      </div>
    </Layout>
  );
}

export default DesignContainer;
