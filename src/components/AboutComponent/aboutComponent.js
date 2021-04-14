import React, { Component } from 'react'
import {downloadResumeButtonClicked} from './downloadResumeButtonClicked';
import aboutImg from "../../assets/snap.png"
import "../../styles/aboutComponent.css";

class AboutComponent extends Component {
    render() {
        return (
            <div id={this.props.nightMode?"night-wrapper":"wrapper"}>
                <div id={this.props.nightMode?"about-section-night":"about-section"}>
                    <div id="about">
                        <div id="about-text">
                            <h1>ABOUT ME</h1>
                            <h3>I'm a Frontend Developer in Tata Consultancy Services based in Gandhinagar.</h3>
                            <p>My strengths include problem-solving capabilities and expertise in Data Structures and Algorithms. The Passion driving me is building highly scalable and user-friendly apps with a performance-oriented approach.</p>
                            <p>I love transforming complex problems into simple, beautiful and intuitive code and sometimes designing UI/UX. <span className="mob-hide">When I'm not coding, tweeting or pushing pixels, you'll find me writing, making tea, drinking shakes or playing cricket.</span></p>
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
