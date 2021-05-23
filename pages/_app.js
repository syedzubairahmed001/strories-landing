import "./styles.css";

import React from "react";
import Head from "next/head";
// import "../sass/index.scss";

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
        <meta name="google-site-verification" content="VHBliz1D6fZ5GxgWIzxU4IdbHnBPVKmWLDDQC94ZunU" />
        <meta name="description" content="Now post stories in browser, your favorite stories feature now in browser, available for chrome and edge " />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
