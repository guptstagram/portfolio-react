import React from "react";
import "./layout.component.scss";

import { DetailsContext } from "../contexts/myDetailsContext";

const Layout = ({ children }) => {
  const { nightMode } = React.useContext(DetailsContext);
  return (
    <div className={`screen-wrapper ${nightMode ? "night" : "day"}`}>
      <div className={`child-section ${nightMode ? "night" : "day"}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
