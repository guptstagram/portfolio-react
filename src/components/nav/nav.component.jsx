import React from "react";

import menuRed from "../../assets/menu-red.png";
import menuGreen from "../../assets/menu-green.png";
import crossRed from "../../assets/cross-red.png";
import crossGreen from "../../assets/cross-green.png";

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
        <img
          src={
            navOpen
              ? nightMode
                ? crossGreen
                : crossRed
              : nightMode
              ? menuGreen
              : menuRed
          }
          alt="navbar-icon"
        />
      </div>
    </nav>
  );
};

export default Nav;
