import React from "react";
import { NavLink } from "react-router-dom";
import "./navitem.style.scss";

const NavItem = ({ title, index, nightMode, handleMenu, handleLights }) => {
  return (
    <NavLink
      className={`circle m${index + 1} ${nightMode ? "night" : "day"}`}
      onClick={index === 0 ? handleLights : handleMenu}
      to={
        index === 0
          ? "#"
          : title.toLowerCase() === "home"
          ? `/`
          : `/${title.toLowerCase()}`
      }
    >
      <div>
        {index === 0 ? `${title} ${nightMode ? "On" : "Off"}!!` : title}
      </div>
    </NavLink>
  );
};

export default NavItem;
