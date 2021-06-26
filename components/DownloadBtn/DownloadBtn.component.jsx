import React from "react";

const DownloadBtn = () => {
  const [link, setLink] = React.useState("");
  const [browserName, setBrowserName] = React.useState("");
  React.useEffect(() => {
    console.log("window.innerHeight", window.innerHeight);
    let agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf("edge") > -1:
        setBrowserName("edge");
        break;
      case agent.indexOf("edg/") > -1:
        setBrowserName("edge");
        break;
      case agent.indexOf("chrome") > -1 && !!window.chrome:
        setBrowserName("chrome");
        break;
      default:
        setBrowserName("other");
    }
    if (browserName === "edge") {
      setLink(
        "https://microsoftedge.microsoft.com/addons/detail/browser-stories/dmfflnlaaalkihcikmmbdacijlfjkklc"
      );
    }
    setLink(
      "https://chrome.google.com/webstore/detail/browser-stories/cpflpimmgoikimlpdpihhecigmgehagn/related?hl=en-GB"
    );
  }, []);
  return (
    <a href={link} className="btn-primary" target="_blank">
      Get now
    </a>
  );
};

export default DownloadBtn;
