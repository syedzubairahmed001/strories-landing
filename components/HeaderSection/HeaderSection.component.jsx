import React from "react";

import styles from "./HeaderSection.module.css";

const HeaderSection = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1 className={`text-center text-color__primary-gradient`}>
            Your favorite Stories feature <br></br> now in Browsers!{" "}
            <img
              src="/assets/images/emojis/shocked_emoji.png"
              alt="party_emote"
              className="w-40px"
            />
          </h1>

          {/* <div>
            <p className={styles.para1}>
              Created with ❤️ by{" "}
              <a href="https://twitter.com/zubairself" target="_blank">
                Syed Zubair Ahmed
              </a>
            </p>
          </div> */}
        </div>
      </div>
      <div className={`text-center mt-20`}>
        <div className={`flex flex-center mb-20`}>
          <div className={`${styles.downloadSection} mb-10`}>
            <p className="font-size-20 mr-10 text-color--dark-1">Install on</p>
            <a
              href="https://chrome.google.com/webstore/detail/stories/cpflpimmgoikimlpdpihhecigmgehagn/related?hl=en-GB"
              target="_blank"
              alt="Download on Chrome"
              className={styles.downloadLink}
            >
              <img src="/assets/images/chrome_logo.png" alt="screenshot" />
            </a>
            <a
              href="https://microsoftedge.microsoft.com/addons/detail/stories/dmfflnlaaalkihcikmmbdacijlfjkklc"
              target="_blank"
              alt="Download on Edge"
              className={styles.downloadLink}
            >
              <img src="/assets/images/edge_logo.png" alt="screenshot" />
            </a>
          </div>
        </div>

        <a
          href="https://www.producthunt.com/posts/browser-stories?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-browser-stories"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=303181&theme=light"
            alt="Browser Stories - Your favorite Stories feature now in Browsers! | Product Hunt"
            style={{ width: "250px", height: "54px" }}
            width="250px"
            height="54px"
          />
        </a>
        <br />
        <img
          src="/assets/images/featured_images/browser_layout.jpg"
          alt="screenshot"
          className={styles.screenshot}
        />
      </div>
    </div>
  );
};

export default HeaderSection;
