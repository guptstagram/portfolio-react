import React from "react";

const ParaLink = ({ children }) => {
  return (
    <p>
      {`${children.text} `}
      <a
        className="highlight"
        href={children.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children.name}
      </a>
    </p>
  );
};

export default ParaLink;
