import React from "react";

import styles from "./StoriesShowcaseSection.module.css";
import DownloadBtn from "../DownloadBtn/DownloadBtn.component";

const StoriesShowcase = (props) => {
  return (
    <div className={`${styles.container} bg-light-1 flex-column-mobile mb-40`}>
      <div className={styles.showcaseImage}></div>
      <div className={`flex p-30 flex-justify-center flex-column`}>
        <div>
          <h2 className="text-color--dark-1">
            Choose from beautiful backgrounds and share to the world what you are up to.
          </h2>
          <div className="mt-10">
            <DownloadBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesShowcase;
