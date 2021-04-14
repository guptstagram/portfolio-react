import React, { Component } from 'react'
import {generateExpTime} from './generateExpTime';
import "../../styles/expComponent.css"

class ExpComponent extends Component {

    componentDidMount=()=>{
        generateExpTime();
    }

    render() {
        return (
            <div id={this.props.nightMode?"night-wrapper":"wrapper"}>
                <div id={this.props.nightMode?"exp-section-night":"exp-section"}>
                    <div className="exp-box">
                        <p>I have <span className="red-text"></span> of experience working as a Frontend Developer in Tata Consultancy Services designing and developing web apps using HTML, CSS Flexbox, Bootstrap, Material UI, JavaScript, React and Redux.</p>
                        <p>Great track record of on-time deliverables meeting the client requirements.</p>
                        <p>Followed <span className="highlight">Agile methodologies</span> and tools like Git, Jira and Jenkins in the assigned projects.</p>
                        <p className="mob-hide">Been part of a <span className="highlight">technical interview panel</span> for hiring new candidates and have <span class="highlight">trained trainees and colleagues</span> on modern technologies like React and Redux.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpComponent;
