import React, { Component } from 'react'
import {generateExpTime} from './generateExpTime';
import Fade from '../../transitions/fade.js';
import "../../styles/expComponent.css"

export class ExpComponent extends Component {

    componentDidMount=()=>{
        generateExpTime();
    }

    render() {
        return (
            <div id="wrapper">
                <div id="exp-section">
                    <div className="exp-box">
                        <p>I have <span className="red-text"></span> of experience working as Developer in Tata Consultancy Services on various technologies such as HTML, CSS Flexbox, Bootstrap, JavaScript, Rest APIs, Django, BeautifulSoup.</p>
                        <p>I have designed and developed various web user interfaces during my tenure in TCS.</p>
                        <p>I have followed Agile methodologies in my projects and also used tools like Jira, and Git.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpComponent;
