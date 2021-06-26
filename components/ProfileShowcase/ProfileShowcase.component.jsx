import React from "react";

import styles from "./ProfileShowcase.module.css";
import DownloadBtn from "../DownloadBtn/DownloadBtn.component";

const StoriesShowcase = (props) => {
  return (
    <div className={`${styles.container} flex-column-reverse-mobile mb-40`}>
      <div className={`flex flex-justify-center flex-column p-30 flex-1`}>
        <h2 className="text-color--dark-1">
          Create your rocking profile and stand out!
        </h2>
        <div className="mt-10">
          <DownloadBtn />
        </div>
      </div>
      <div className={styles.showcaseImage}></div>
    </div>
  );
};

export default StoriesShowcase;
