import React, { useState } from "react";
import styles from "../styles/AnalysisPage.module.css";

import Header from "./Header";
import Subtitle from "./Subtitle";
import ImageUploader from "./ImageUploader";
import PickImageButton from "./PickImageButton";

const TITLE = "Does Your Cat Eat Can Can?";
const SUBTITLE = "TODO: Subtitle here.";

export default function AnalysisPage() {
  const [image, setImage] = useState(null);

  return (
    <div className={styles.page_container}>
      <div className={styles.left_col_container}>
        <Header title={TITLE} />
        <Subtitle subtitle={SUBTITLE} />
        <PickImageButton setImage={setImage} />
      </div>
      <ImageUploader image={image} />
    </div>
  );
}
