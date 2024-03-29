import React from "react";

export const DetailsContext = React.createContext();

export const DetailsProvider = (props) => {
  const [myDetails, setMyDetails] = React.useState({
    splashLoaded: false,
    nightMode: true,
    navOpen: false,
    logo: "<guptstagram/>",
    navMenus: ["Home", "Expertise", "Experience", "Connect", "About", "Lights"],
    resumeURL:
      "https://drive.google.com/file/d/1da8Gu5aj0Esz-GTp-wqpPrOVt56qKAmE/view?usp=sharing",
    intro: "HELLO",
    name: "SOURABH GUPTA",
    hero: "I'M SOURABH",
    headline: "A FRONTEND DEVELOPER",
    tagline: "I DESIGN & DEVELOP WEB APPS",
    caption: "I stand on a fine spot where Design fuses into Code.",
    skills: [
      "React",
      "Redux",
      "JavaScript",
      "Material UI",
      "Next.js",
      "Vue.js",
      "JSS",
      "MobX",
      "HTML",
      "CSS",
      "Sass",
      "Bootstrap",
      "Git",
      "Data Structures",
      "Algorithms",
    ],
    about: {
      heading: "ABOUT SOURABH",
      position: "Software Engineer",
      organisation: "Classplus (Bunch Microtechnologies Pvt Ltd)",
      basedIn: "Noida, India",
      tagline: function () {
        return `I'm a ${this.position} at ${this.organisation} based in ${this.basedIn}.`;
      },
      p: [
        "My strengths include problem-solving capabilities and expertise in Data Structures and Algorithms. The Passion driving me is building highly scalable and user-friendly apps with a performance-oriented approach.",
        "I love transforming complex problems into simple, beautiful and intuitive code and sometimes designing UI/UX. When I'm not coding, tweeting or pushing pixels, you'll find me writing, making tea, drinking shakes or playing cricket.",
      ],
    },
    connect: {
      git: {
        name: "GitHub",
        text: "I keep my code on",
        url: "https://github.com/guptstagram/",
      },
      medium: {
        name: "Medium",
        text: "Write about JavaScript and React on",
        url: "https://guptstagram.medium.com/",
      },
      twitter: {
        name: "Tweet",
        text: "When I feel like taking a break from coding and writing blogs, I love to",
        url: "https://twitter.com/guptstagram/",
      },
      linkedin: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guptstagram/",
      },
      insta: {
        name: "Instagram",
        text: "Not good at photos but still on",
        url: "https://www.instagram.com/guptstagram/",
      },
      boxText: "And all that in box below.",
    },
  });

  const handleMenu = () =>
    setMyDetails({
      ...myDetails,
      navOpen: !myDetails.navOpen,
    });
  const handleLights = () =>
    setMyDetails({
      ...myDetails,
      nightMode: !myDetails.nightMode,
      navOpen: !myDetails.navOpen,
    });
  const handleSplashLoaded = () =>
    setMyDetails({
      ...myDetails,
      splashLoaded: true,
    });

  return (
    <DetailsContext.Provider
      value={{ ...myDetails, handleMenu, handleLights, handleSplashLoaded }}
    >
      {props.children}
    </DetailsContext.Provider>
  );
};
