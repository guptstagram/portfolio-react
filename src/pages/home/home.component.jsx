import React from "react";
import "./home.style.scss";

import { DetailsContext } from "../../contexts/myDetailsContext";
import AnimText from "../../components/animText/animText.component";
import { animTimer } from "./animTimer";
import { addTextCursor, removeTextCursor } from "./textCursor";

const Home = () => {
  let timer;

  const { hero, headline, tagline, caption } = React.useContext(DetailsContext);

  const [heroText, setHeroText] = React.useState([]);
  const [headlineText, setHeadlineText] = React.useState([]);
  const [taglineText, setTaglineText] = React.useState([]);
  const heroTextRef = React.useRef();
  const headlineTextRef = React.useRef();
  const taglineTextRef = React.useRef();
  const captionTextRef = React.useRef();
  const currState = React.useRef("heroText");
  const countState = React.useRef(-1);

  React.useEffect(() => {
    if (currState.current === "heroText") {
      addTextCursor(heroTextRef);
      animTimer(
        timer,
        countState,
        currState,
        heroText,
        setHeroText,
        hero,
        "headlineText"
      );
    }
    if (currState.current === "headlineText") {
      removeTextCursor(heroTextRef);
      addTextCursor(headlineTextRef);
      animTimer(
        timer,
        countState,
        currState,
        headlineText,
        setHeadlineText,
        headline,
        "taglineText"
      );
    }
    if (currState.current === "taglineText") {
      removeTextCursor(headlineTextRef);
      addTextCursor(taglineTextRef);
      animTimer(
        timer,
        countState,
        currState,
        taglineText,
        setTaglineText,
        tagline,
        "captionText"
      );
    }
    if (currState.current === "captionText") {
      removeTextCursor(taglineTextRef);
      captionTextRef.current.classList.add("caption-text-visible");
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroText, headlineText, taglineText]);

  return (
    <div className="home-section">
      <AnimText ref={heroTextRef} className="hero-text" textArray={heroText} />
      <AnimText
        ref={headlineTextRef}
        className="headline-text"
        textArray={headlineText}
      />
      <AnimText
        ref={taglineTextRef}
        className="tagline-text"
        textArray={taglineText}
      />
      {caption.length > 0 && (
        <q ref={captionTextRef} className="caption-text">
          {caption}
        </q>
      )}
    </div>
  );
};

export default Home;
