import React from "react";

import styles from "./DownloadSection.module.css";
import { Instagram, Mail, Twitter } from "react-feather";

const DownloadSection = (props) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`flex flex-center flex-column p-30`}>
        <h2 className="text-color--dark-1 text-center text-color--light-1  mb-10">
          Experience a new way to connect with people.
        </h2>
        <div className={`${styles.downloadSection} mb-10`}>
          <p className="font-size-20 mr-10 text-color--dark-1">Install on</p>
          <a
            href="https://chrome.google.com/webstore/detail/stories/cpflpimmgoikimlpdpihhecigmgehagn/related?hl=en-GB"
            target="_blank"
            className={styles.downloadLink}
          >
            <img src="/assets/images/chrome_logo.png" alt="screenshot" />
          </a>
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/stories/dmfflnlaaalkihcikmmbdacijlfjkklc"
            target="_blank"
            className={styles.downloadLink}
          >
            <img src="/assets/images/edge_logo.png" alt="screenshot" />
          </a>
        </div>
        <footer className="text-center">
          <div className="flex flex-center mt-20">
            <a
              href="https://instagram.com/browserstories"
              target="_blank"
              className="icon-light-1 mr-20 text-center d-inline-block"
            >
              <Instagram size={30} />
            </a>
            <a
              href="https://twitter.com/zubairself"
              target="_blank"
              className="icon-light-1 mr-20 text-center d-inline-block"
            >
              <Twitter size={30} />
            </a>
            <a
              href="mailto:syedzubairahmed001@gmail.com"
              target="_blank"
              className="icon-light-1 text-center d-inline-block"
            >
              <Mail size={30} />
            </a>
          </div>
          <p className="text-color--light-2 text-center"> &#169; {new Date().getFullYear()}, All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default DownloadSection;
