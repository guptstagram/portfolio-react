import React from "react";
import { DetailsContext } from "../../contexts/myDetailsContext";
import "./loader.style.scss";

const Loader = () => {
  const { nightMode } = React.useContext(DetailsContext);
  return (
    <div className={`loader ${nightMode ? "green" : "red"}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
