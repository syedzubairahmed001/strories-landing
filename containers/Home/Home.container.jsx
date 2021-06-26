import React from "react";

import styles from "./Home.module.css";
import HeaderSection from "../../components/HeaderSection/HeaderSection.component";
import StoriesShowcase from "../../components/StoriesShowcaseSection/StoriesShowcaseSection.component";
import ProfileShowcase from "../../components/ProfileShowcase/ProfileShowcase.component";
import Navigation from "../../components/Navigation/Navigation.component";
import DownloadSection from "../../components/DownloadSection/DownloadSection.component";

const Home = (props) => {
  return (
    <>
      <div className={styles.container}>
        <Navigation />
        <HeaderSection />
        <StoriesShowcase />
        <ProfileShowcase />
        <DownloadSection />
      </div>
    </>
  );
};

export default Home;
