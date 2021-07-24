import React from "react";
import { Redirect } from "react-router-dom";
import { DetailsContext } from "../../contexts/myDetailsContext";

import "./splashscreen.styles.scss";

const SplashScreen = () => {
  let timer = React.useRef(0);

  const { splashLoaded, nightMode, handleSplashLoaded } =
    React.useContext(DetailsContext);

  const [widthZero, setWidthZero] = React.useState(false);
  const [textSwipe, setTextSwipe] = React.useState(false);

  React.useEffect(() => {
    timer.current = setTimeout(() => setWidthZero(true), 100);
    timer.current = setTimeout(() => setTextSwipe(true), 1100);
    timer.current = setTimeout(handleSplashLoaded, 1800);
    return () => clearTimeout(timer);
  }, [handleSplashLoaded]);

  return splashLoaded ? (
    <Redirect to="/home" />
  ) : (
    <div className="splash-screen-container">
      <div
        className={`splash-screen-bg ${nightMode ? "night" : "day"} ${
          widthZero && "width-zero"
        }`}
      ></div>
      <div
        className={`text-wrapper ${nightMode ? "night" : "day"} ${
          textSwipe && "text-swipe"
        }`}
      >
        <div className="splash-text">HE</div>
        <div className="splash-text">LLO</div>
      </div>
    </div>
  );
};

export default SplashScreen;
