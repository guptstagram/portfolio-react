import React from "react";
import {increaseBlueColorWidth} from './increaseBlueColorWidth';
import {movingHelloText} from './movingHelloText';
import {addingLineBefore} from './addingLineBefore';
import {addTextToLines} from './addTextToLines';
import {addingLineAfter} from './addingLineAfter';
import {quoteOpacity} from './quoteOpacityIncrease';
import "../../styles/homeComponent.css";

class HomeComponent extends React.Component {

  constructor(props){
    super(props);
    this.line1 = "I'M SOURABH";
    this.line2 = "FULL-STACK DEVELOPER";
    this.line3 = "I DEVELOP WEB & MOBILE APPS";
    this.line4 = "I stand on a fine spot where Design fuses into Code.";
    this.timer1=null;
    this.timer2=null;
    this.timer3=null;
    this.timer4=null;
    this.timer5=null;
    this.timer6=null;
    this.timer7=null;
    this.timer8=null;
    this.line1timer=[];
    this.line2timer=[];
    this.line3timer=[];
    this.line4timer=[];
  }

  componentDidMount = () => {
    let currTime=1000;
    this.timer1=setTimeout(() => increaseBlueColorWidth(), currTime);
    this.timer2=setTimeout(() => movingHelloText(), currTime+=1000);


    // ------------------------- LINE 1 PRINTING STARTS HERE ----------------------------
    this.timer3=setTimeout(()=>addingLineBefore(".intro-text-name-font"),currTime);
    for (let i = 0; i < this.line1.length; i++) {
      this.line1timer.push(setTimeout(()=>addTextToLines(".intro-text-name-font",this.line1,i),currTime+=80));
    }
    this.timer4=setTimeout(()=>addingLineAfter(".intro-text-name-font"),currTime);
    // ------------------------- LINE 1 PRINTING ENDS HERE ----------------------------




    // ------------------------- LINE 2 PRINTING STARTS HERE ----------------------------
    this.timer5=setTimeout(()=>addingLineBefore(".intro-text-developer-font"),currTime);
    for (let i = 0; i < this.line2.length; i++) {
      this.line2timer.push(setTimeout(()=>addTextToLines(".intro-text-developer-font",this.line2,i),currTime+=80));
    }
    this.timer6=setTimeout(()=>addingLineAfter(".intro-text-developer-font"),currTime);
    // ------------------------- LINE 2 PRINTING ENDS HERE ----------------------------




    // ------------------------- LINE 3 PRINTING STARTS HERE ----------------------------
    this.timer7=setTimeout(()=>addingLineBefore(".intro-text-apps-font"),currTime);
    for (let i = 0; i < this.line3.length; i++) {
      this.line3timer.push(setTimeout(()=>addTextToLines(".intro-text-apps-font",this.line3,i),currTime+=80));
    }
    this.timer8=setTimeout(()=>addingLineAfter(".intro-text-apps-font"),currTime);
    // ------------------------- LINE 3 PRINTING ENDS HERE ----------------------------


    this.timer9=setTimeout(() => quoteOpacity(), currTime);
    

  };

  componentWillUnmount=()=>{
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
    clearTimeout(this.timer3);
    clearTimeout(this.timer4);
    clearTimeout(this.timer5);
    clearTimeout(this.timer6);
    clearTimeout(this.timer7);
    clearTimeout(this.timer8);
    clearTimeout(this.timer9);
    this.line1timer.forEach(timer=>{clearTimeout(timer)});
    this.line2timer.forEach(timer=>{clearTimeout(timer)});
    this.line3timer.forEach(timer=>{clearTimeout(timer)});
  }

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
              <div className="intro-text-quote-font">
                <q>I stand on a fine spot where Design fuses into Code.</q>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
