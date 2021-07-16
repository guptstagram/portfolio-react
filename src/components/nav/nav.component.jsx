import React from "react";

import menuIcon from "../../assets/menu.png";
import closeIcon from "../../assets/cross.png";
import "./nav.style.scss";

import { DetailsContext } from "../../contexts/myDetailsContext";
import NavItem from "../navItem/navItem.component";

const Nav = () => {
  const { navOpen, nightMode, navMenus, handleMenu, handleLights } =
    React.useContext(DetailsContext);

  return (
    <nav
      className={`${navOpen ? "opened" : "closed"} ${
        nightMode ? "night" : "day"
      }`}
    >
      {navMenus
        .slice(0)
        .reverse()
        .map((menu, index) => (
          <NavItem
            key={index}
            title={menu}
            index={index}
            nightMode={nightMode}
            handleMenu={handleMenu}
            handleLights={handleLights}
          />
        ))}
      <div
        className={`nav-icon circle ${nightMode ? "night" : "day"}`}
        onClick={handleMenu}
      >
        <img src={navOpen ? closeIcon : menuIcon} alt="navbar-icon" />
      </div>
    </nav>
  );
};

export default Nav;
