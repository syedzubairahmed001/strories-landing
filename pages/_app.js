import "./styles.css";

import React from "react";
import Head from "next/head";
import "../styles/typography.css";
import "../styles/layout.css";
import "../styles/colors.css";
import "../styles/buttons.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    console.log(window);
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="google-site-verification"
          content="VHBliz1D6fZ5GxgWIzxU4IdbHnBPVKmWLDDQC94ZunU"
        />
        <meta
          name="description"
          content="Now post stories in browser, your favorite stories feature now in browser, available for Chrome and Edge "
        />
        <meta
          name="tile"
          content="Browser Stories, a new way of networking"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
