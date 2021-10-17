import React from "react";
import "./logo.styles.scss";

import { DetailsContext } from "../../contexts/myDetailsContext";

const Logo = () => {
  const { logo, nightMode } = React.useContext(DetailsContext);
  return (
    <p className={`guptstagram-logo ${nightMode ? "night" : "day"}`}>{logo}</p>
  );
};

export default Logo;
