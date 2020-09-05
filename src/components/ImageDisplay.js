import React from "react";
import styles from "../styles/ImageDisplay.module.css";

export default function ImageDisplay({ image, setImage }) {
  function handleCancelImageClick() {
    setImage(null);
  }
  return (
    <div className={styles.right_col_container}>
      {image ? (
        <>
          <img
            className={styles.image}
            src={URL.createObjectURL(image)}
            alt="catImage"
          />
          <button
            className={styles.cancel_button}
            onClick={handleCancelImageClick}
          >
            X
          </button>
        </>
      ) : null}
    </div>
  );
}
