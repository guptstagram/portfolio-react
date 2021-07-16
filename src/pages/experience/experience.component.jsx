import React from "react";
import "./experience.style.scss";
import { getExpDuration } from "./getExpDuration";

const Experience = () => {
  const [exp, setExp] = React.useState("");
  React.useEffect(() => {
    setExp(getExpDuration());
  }, []);
  return (
    <div className="experience-section">
      <p>
        I have <span className="highlight">{exp}</span> of great learning
        experience{" "}
        <span className="highlight">
          designing and developing high-quality deliverables
        </span>
        , as well as{" "}
        <span className="highlight">training and mentoring developers</span> by
        sharing experiences and knowledge on modern web development
        technologies.
      </p>
      <p>
        Followed <span className="highlight">Agile methodologies</span> and
        tools like Git, Jira, Confluence and Jenkins in the assigned projects.
      </p>
      <p>
        The Passion driving me is{" "}
        <span className="highlight">
          building highly scalable and user-friendly apps
        </span>{" "}
        with a performance-oriented approach.
      </p>
    </div>
  );
};

export default Experience;
