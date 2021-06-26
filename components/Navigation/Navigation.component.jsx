import React from "react";

import styles from "./Navigation.module.css";

const NavigationSection = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/assets/images/logo/logo_100x100.png" className={styles.logo} alt="logo" />
        <p className={styles.logoText}>Browser Stories</p>
      </div>
    </div>
  );
};

export default NavigationSection;
