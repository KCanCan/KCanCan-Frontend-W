import React from "react";
import styles from "../styles/AnalysisPage.module.css";

import Header from "./Header";
import Subtitle from "./Subtitle";
import ImageUploader from "./ImageUploader";

const TITLE = "Does Your Cat Eats Can Can?";
const SUBTITLE = "TODO: Subtitle here.";

export default function AnalysisPage() {
  return (
    <div className={styles.page_container}>
      <div className={styles.left_col_container}>
        <Header title={TITLE} />
        <Subtitle subtitle={SUBTITLE} />
      </div>
      <ImageUploader />
    </div>
  );
}
