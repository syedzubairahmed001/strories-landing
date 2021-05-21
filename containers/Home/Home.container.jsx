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
              Share and watch stories from people around the world while you
              browse
            </h2>
            <div className={styles.downloadWrapper}>
              <p className={styles.downloadHeading}>Get it for:</p>
              <div className={styles.downloadSection}>
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
            </div>
            <div>
              <p className={styles.para1}>
                Created with ❤️ by{" "}
                <a href="https://twitter.com/zubairself" target="_blank">
                  Syed Zubair Ahmed
                </a>
              </p>
              <a
                href="https://www.producthunt.com/posts/stories-in-browser?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-stories-in-browser"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=284261&theme=light"
                  alt="Stories in browser - Share and watch stories while you browse | Product Hunt"
                  style={{width: "250px", height: "54px"}}
                  width="250"
                  height="54"
                />
              </a>
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
