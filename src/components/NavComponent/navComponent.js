import React from 'react';
import '../../styles/navComponent.css'
import {NavLink} from "react-router-dom";
import menuIcon from '../../assets/menu.png';
import crossIcon from '../../assets/cross.png';

class NavComponent extends React.Component{

    componentDidMount=()=>{
        document.querySelectorAll(".navlink").forEach(circl => {
            circl.addEventListener("click",()=>{
                this.openCloseMenu();
            })
        });
    }

    openCloseMenu=()=>{
        document.querySelector("#nav").classList.toggle("open");
        if (document.querySelector("#nav").classList.contains("open")){
            document.querySelector("#ham-icon-img").src=crossIcon;
        }
        else{
            document.querySelector("#ham-icon-img").src=menuIcon;
        }
    }


    render(){
        return(
            <div id="nav">
                <NavLink className="navlink circle m1" to="/about">
                    <div>About</div>
                </NavLink>
                <NavLink className="navlink circle m2" to="/connect">
                    <div>Connect</div>
                </NavLink>
                <NavLink className="navlink circle m3" to="/experience">
                    <div>Experience</div>
                </NavLink>
                <NavLink className="navlink circle m4" to="/skills">
                    <div>ToolKit</div>
                </NavLink>
                <NavLink className="navlink circle m5" to="/">
                    <div>Home</div>
                </NavLink>
                <div id="ham-icon" className="circle" onClick={this.openCloseMenu}>
                    <img id="ham-icon-img" src={menuIcon} alt="nav-hamburger"/>
                </div> 
            </div>
        );
    }
}

export default NavComponent;