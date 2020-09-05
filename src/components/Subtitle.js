import React from "react";
import styles from "../styles/Subtitle.module.css";

export default function Subtitle({ subtitle }) {
  return <div className={styles.subtitle}>{subtitle}</div>;
}
