import React from "react";
import "./layout.style.scss";

import { DetailsContext } from "../contexts/myDetailsContext";

import MouseParticles from "react-mouse-particles";

const Layout = ({ children }) => {
  const { nightMode } = React.useContext(DetailsContext);

  return (
    <div className={`screen-wrapper ${nightMode ? "night" : "day"}`}>
      <div className={`child-section ${nightMode ? "night" : "day"}`}>
        <MouseParticles
          g={10}
          radius={1}
          color={["#64ffda", "#ed4457"]}
          life={1}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
