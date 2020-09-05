import React, { useRef } from "react";

import styles from "../styles/PickImageButton.module.css";

export default function PickImageButton({ setImage }) {
  const fileInput = useRef();
  const handleSetNode = (node) => {
    fileInput.current = node;
  };
  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        type="file"
        ref={(node) => handleSetNode(node)}
      />
      <button
        className={styles.pick_button}
        onClick={() => fileInput.current.click()}
      >
        Pick Image
      </button>
    </>
  );
}
