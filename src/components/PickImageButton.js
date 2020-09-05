import React, { useRef } from "react";

import styles from "../styles/PickImageButton.module.css";

export default function PickImageButton({ setImage }) {
  const fileInput = useRef();

  function handleSetNode(node) {
    fileInput.current = node;
  }

  function handleChangeImage(e) {
    setImage(e.target.files[0]);
  }

  function handleClick() {
    fileInput.current.click();
  }
  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        type="file"
        ref={handleSetNode}
        onChange={handleChangeImage}
      />
      <button className={styles.pick_button} onClick={handleClick}>
        Pick an Image
      </button>
    </>
  );
}
