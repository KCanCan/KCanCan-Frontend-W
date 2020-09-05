import React from "react";
import styles from "../styles/ImageDisplay.module.css";

export default function ImageDisplay({ image }) {
  // const imageUrl = URL.createObjectURL(image);
  return (
    <div className={styles.right_col_container}>
      {image ? (
        <img
          className={styles.image}
          src={URL.createObjectURL(image)}
          alt="catImage"
        />
      ) : null}
    </div>
  );
}
