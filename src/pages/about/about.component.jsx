import React from "react";
import "./about.style.scss";

import image from "../../assets/vector.png";
import { DetailsContext } from "../../contexts/myDetailsContext";

import Button from "../../components/button/button.component";
import { handleViewResume } from "./handleViewResume";

const About = () => {
  const { about } = React.useContext(DetailsContext);

  return (
    <div className="about-section">
      <div className="image-section">
        <img src={image} alt="sourabh-gupta" />
      </div>
      <div className="text-section">
        <h1>{about.heading}</h1>
        <h3>{about.tagline()}</h3>
        <p>{about.p[0]}</p>
        <p>{about.p[1]}</p>
        <Button onClick={handleViewResume}>View Resume</Button>
      </div>
    </div>
  );
};

export default About;
