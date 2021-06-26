let browser = function (w) {
  let agent = w.navigator.userAgent.toLowerCase();
  switch (true) {
    case agent.indexOf("edge") > -1:
      return "edge";
    case agent.indexOf("edg/") > -1:
      return "edge";
    case agent.indexOf("chrome") > -1 && !!w.chrome:
      return "chrome";
    default:
      return "other";
  }
};

export default browser;
