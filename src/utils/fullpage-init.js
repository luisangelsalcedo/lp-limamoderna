import fullpage from "fullpage.js/dist/fullpage.extensions.min";
import "fullpage.js/dist/fullpage.css";

const fpInit = (anchors = []) => {
  new fullpage("#app", {
    anchors,
    slidesNavigation: true,
    scrollOverflow: false,
    scrollHorizontally: true,
    autoScrolling: false,
    touchSensitivity: 15,
    paddingTop: "0px",
    paddingBottom: "0px",
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    css3: true,
    fitToSection: false,
    verticalCentered: false,
  });
};

export default fpInit;
