import React from "react";

import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section1}>
          <div>
            <img src="/assets/images/logo/logo_100x100.png" alt="logo" />
            <h1>
              Introducing Stories in{" "}
              <span className={styles.gradientBg}>Browser!</span>
            </h1>
            <h2 className={styles.subTitle}>
              Share and watch stories from people around the world while you browse
            </h2>
            <div className={styles.downloadWrapper}>
              <p className={styles.downloadHeading}>Get it for:</p>
              <div className={styles.downloadSection}>
                <a href="https://chrome.google.com/webstore/detail/stories/cpflpimmgoikimlpdpihhecigmgehagn/related?hl=en-GB" target="_blank" className={styles.downloadLink}>
                  <img src="/assets/images/chrome_logo.png" alt="screenshot" />
                </a>
                <a href="https://microsoftedge.microsoft.com/addons/detail/stories/dmfflnlaaalkihcikmmbdacijlfjkklc" target="_blank" className={styles.downloadLink}>
                  <img src="/assets/images/edge_logo.png" alt="screenshot" />
                </a>
              </div>
            </div>
            <div>
              <p className={styles.para1}>
                Created with ❤️ by{" "}
                <a href="https://twitter.com/_syed_zubair" target="_blank">Syed Zubair Ahmed</a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section2}>
          <img
            src="/assets/images/screenshot_1.jpg"
            alt="screenshot"
            className={styles.screenshot}
          />
        </div>
        <h3 className={styles.bgText}>Stories</h3>
      </div>
    </>
  );
};

export default Home;
