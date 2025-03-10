import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Layout, { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import styles from "./index.module.scss";
import pineTree from "../../assets/images/background/pine-tree.jpg";
import butterfly from "../../assets/images/background/butterfly.jpg";

function ProjectContainer() {
  const location = useLocation();
  const data = location.state;
  console.log(location);
  const backgroundStyle = useMemo(() => {
    const imageUrl = data.type === PAGE_IDS.design ? pineTree : butterfly;

    return {
      background: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }, [data]);

  return (
    <Layout headerConfig={{ currentPage: data.type as Page }}>
      <div className={styles.overlayer} />
      <div className={styles.background} style={backgroundStyle} />
      <div className={styles.container}>
        <h1 className={styles.title}>{`.·. ${data.title} .·.`}</h1>
        <div className={styles.imageContainer}>
          <img src={data.imageUrl} alt={data.title} />
        </div>
      </div>
    </Layout>
  );
}

export default ProjectContainer;
