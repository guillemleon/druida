import React from "react";
import styles from "./index.module.scss";

interface Item {
  id: string;
  imageUrl: string;
  title: string;
}

const Gallery = ({ items }: { items: Item[] }) => {
  return (
    <div className={styles.gridContainer}>
      {items.map((item) => (
        <div key={item.id} className={styles.gridItem}>
          <img loading="lazy" src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
