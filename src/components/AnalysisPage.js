import React, { useState } from "react";
import styles from "../styles/AnalysisPage.module.css";

import Header from "./Header";
import Subtitle from "./Subtitle";
import ImageDisplay from "./ImageDisplay";
import PickImageButton from "./PickImageButton";
import Chart from "./Chart";

const TITLE = "Does Your Cat Eat Can Can?";
const SUBTITLE = "TODO: Subtitle here.";

export default function AnalysisPage() {
  const [image, setImage] = useState(null);

  return (
    <div className={styles.page_container}>
      <div className={styles.left_col_container}>
        <Header title={TITLE} />
        <Subtitle subtitle={SUBTITLE} />
        <PickImageButton image={image} setImage={setImage} />
        {image ? null : <Chart />}
      </div>
      <ImageDisplay image={image} setImage={setImage} />
    </div>
  );
}
