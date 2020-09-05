import React, { useRef } from "react";
import cx from "classnames";

import styles from "../styles/PickImageButton.module.css";

export default function PickImageButton({ image, setImage }) {
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

  function handleSubmit() {
    console.log("submitted");
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
      <div className={styles.button_box}>
        <button
          className={cx(styles.pick_button, styles.bgc_secondary)}
          onClick={handleClick}
        >
          {image ? "Replace" : "Pick an Image"}
        </button>
        {image ? (
          <button
            className={cx(styles.pick_button, styles.bgc_primary)}
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : null}
      </div>
    </>
  );
}
