import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Chart.module.css";

export default function Chart({ data }) {
  const [width, setWidth] = useState(500);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setWidth(parseInt(400 * Math.random() + 100));
  //     console.log(width);
  //   }, 1000);
  // }, [width]);

  return (
    <div>
      <div className={styles.box} style={{ width: width + "px" }}></div>
    </div>
  );
}
