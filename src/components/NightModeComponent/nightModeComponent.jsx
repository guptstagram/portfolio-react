import React from "react";
import moonSVG from "../../assets/moon.svg";
import sunSVG from "../../assets/brightness.svg"
import "../../styles/nightModeComponent.css"

const NightModeComponent = (props) => {
    return (
        <div className={props.nightMode?"day-mode":"night-mode"} onClick={props.handleNightMode}>
            <img className={props.nightMode?"sun-img":"moon-img"} src={props.nightMode?sunSVG:moonSVG} alt="night-mode-icon"/>
        </div>
    )
}

export default NightModeComponent;