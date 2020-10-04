import React, { Component } from 'react'
import {generateExpTime} from './generateExpTime';
import "../../styles/expComponent.css"

class ExpComponent extends Component {

    componentDidMount=()=>{
        generateExpTime();
    }

    render() {
        return (
            <div id="wrapper">
                <div id="exp-section">
                    <div className="exp-box">
                        <p>I have <span className="red-text"></span> of experience working as Developer in Tata Consultancy Services on various technologies such as HTML, CSS Flexbox, Bootstrap, JavaScript, Rest APIs, Django, BeautifulSoup.</p>
                        <p>I have designed and developed various web apps during my tenure in TCS.</p>
                        <p>I have followed Agile methodologies in my projects and also used tools like Jira, and Git.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpComponent;
