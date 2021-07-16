import React from "react";
import { DetailsContext } from "../../contexts/myDetailsContext";
import "./animText.style.scss";

const AnimText = React.forwardRef(({ className, textArray }, ref) => {
  const { nightMode } = React.useContext(DetailsContext);

  const handleMouseOver = (e) => {
    if (e.target.innerText.trim() === "") return;
    e.target.classList.add("anim-text");
    setTimeout(() => e.target.classList.remove("anim-text"), 800);
  };

  return (
    // textArray.length > 0 && (
    <div className={className} ref={ref}>
      {textArray.map((char, index) => (
        <span
          key={index}
          onMouseOver={handleMouseOver}
          className={`hover-eff ${nightMode ? "green" : "red"}`}
        >
          {char}
        </span>
      ))}
    </div>
    // )
  );
});

export default AnimText;
