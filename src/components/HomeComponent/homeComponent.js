import React from "react";
import {clearOutThings} from './clearOutThings';
import {increaseBlueColorWidth} from './increaseBlueColorWidth';
import {movingHelloText} from './movingHelloText';
import {increasingVisibilityofIntroText} from './increasingVisibilityofIntroText';
import "./homeComponent.css";

class HomeComponent extends React.Component {

  componentDidMount = () => {
    increaseBlueColorWidth();
    movingHelloText();
    increasingVisibilityofIntroText();
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
