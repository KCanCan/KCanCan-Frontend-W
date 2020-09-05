import React, { useState } from "react";
import styles from "../styles/Chart.module.css";

export default function Chart({ data }) {
  const [width, setWidth] = useState(500);
  return (
    <div>
      <div className={styles.box}></div>
    </div>
  );
}
