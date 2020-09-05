import React from "react";
import styles from "../styles/Header.module.css";

export default function Header({ title }) {
  title = title.split(" ");

  return (
    <div className={styles.container}>
      {title.map((word, idx) => (
        <h1 key={word + idx} className={styles.header}>
          {word}
        </h1>
      ))}
    </div>
  );
}
