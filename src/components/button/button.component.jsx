import React from "react";
import { DetailsContext } from "../../contexts/myDetailsContext";
import "./button.style.scss";

const Button = ({ children, onClick }) => {
  const { nightMode } = React.useContext(DetailsContext);

  return (
    <button
      onClick={onClick}
      className={`guptstagram-button ${nightMode ? "green" : "red"}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
