import React from "react";
import "./homeComponent.css";

class HomeComponent extends React.Component {
  increaseBlueColorWidth = () => {
    setTimeout(() => {
      document.getElementById("hello-section-blue-half").style.width = "100%";
      document.querySelector(".hello-text-blue-dot").style.color = "#F8F8F8";
    }, 1000);
  };

  movingHelloText = () => {
    setTimeout(() => {
      document.getElementById("hello-text-box").style.left = "180%";
    }, 2000);
  };

  increasingVisibilityofIntroText = () => {
    const line1 = "I'M SOURABH";
    const line2 = "FULL-STACK DEVELOPER";
    const line3 = "I DEVELOP WEB & MOBILE APPS";
    const line4 = "I stand on a fine spot where Design fuses into Code.";
    let currTime = 3000;

    setTimeout(() => {
      document
        .querySelector(".intro-text-name-font")
        .classList.add("after-danda");
    }, currTime);
    for (let i = 0; i < line1.length; i++) {
      setTimeout(() => {
        document.querySelector(".intro-text-name-font").innerHTML +=
          "<span>" + line1[i] + "</span>";
      }, (currTime += 80));
    }
    setTimeout(() => {
      document
        .querySelector(".intro-text-name-font")
        .classList.remove("after-danda");
    }, currTime);

    setTimeout(() => {
      document
        .querySelector(".intro-text-developer-font")
        .classList.add("after-danda");
    }, currTime);
    for (let i = 0; i < line2.length; i++) {
      setTimeout(() => {
        document.querySelector(".intro-text-developer-font").innerHTML +=
          "<span>" + line2[i] + "</span>";
      }, (currTime += 80));
    }
    setTimeout(() => {
      document
        .querySelector(".intro-text-developer-font")
        .classList.remove("after-danda");
    }, currTime);

    setTimeout(() => {
      document
        .querySelector(".intro-text-apps-font")
        .classList.add("after-danda");
    }, currTime);
    for (let i = 0; i < line3.length; i++) {
      setTimeout(() => {
        document.querySelector(".intro-text-apps-font").innerHTML +=
          "<span>" + line3[i] + "</span>";
      }, (currTime += 80));
    }
    setTimeout(() => {
      document
        .querySelector(".intro-text-apps-font")
        .classList.remove("after-danda");
    }, currTime);

    setTimeout(() => {
      document.querySelector(".intro-text-quote-font").innerHTML = "<q></q>";
    }, (currTime += 100));
    for (let i = 0; i < line4.length; i++) {
      setTimeout(() => {
        document.querySelector(".intro-text-quote-font>q").innerHTML +=
          line4[i];
      }, (currTime += 50));
    }
  };

  componentDidMount = () => {
    document.querySelector(".intro-text-name-font").innerHTML=""
    document.querySelector(".intro-text-developer-font").innerHTML=""
    document.querySelector(".intro-text-apps-font").innerHTML=""
    document.querySelector(".intro-text-quote-font").innerHTML=""
    this.increaseBlueColorWidth();
    this.movingHelloText();
    this.increasingVisibilityofIntroText();
  };

  render() {
    return (
      <div id="wrapper">
        <div id="hello-section-grey">
          <div id="hello-section-blue-half">
            <div id="hello-text-box">
              <div id="hello-text">
                <div className="hello-text-big-font">HE</div>
                <div className="hello-text-big-font">
                  LLO<span className="hello-text-blue-dot">.</span>
                </div>
              </div>
            </div>
            <div id="intro-text-box">
              <div className="intro-text-name-font"></div>
              <div className="intro-text-developer-font"></div>
              <div className="intro-text-apps-font"></div>
              <div className="intro-text-quote-font"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
