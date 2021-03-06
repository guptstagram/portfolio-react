import React, { Component } from 'react'
import {downloadResumeButtonClicked} from './downloadResumeButtonClicked';
import aboutImg from "../../assets/snap.png"
import "../../styles/aboutComponent.css";

class AboutComponent extends Component {
    render() {
        return (
            <div id="wrapper">
                <div id="about-section">
                    <div id="about">
                        <div id="about-text">
                            <h1>ABOUT ME</h1>
                            <h3>I'm a Programmer in Tata Consultancy Services based in Gandhinagar.</h3>
                            <p>I have good problem-solving capabilities, expertise in Data Structures and Algorithms and never ending thirst to learn.</p>
                            <p>I love transforming complex problems into simple, beautiful and intuitive code and sometimes designing UI/UX. When I'm not coding, tweeting or pushing pixels, you'll find me writing, making tea, drinking shakes or playing cricket.</p>
                            <div className="resume-button">
                                <button type="button" onClick={downloadResumeButtonClicked}>Download Resume</button>
                            </div>
                        </div>
                        <div id="about-pic">
                            <img src={aboutImg} alt="Sourabh Gupta" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutComponent;
