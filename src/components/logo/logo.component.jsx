import React from "react";
import { DetailsContext } from "../../contexts/myDetailsContext";

const Logo = () => {
    const { logo } = React.useContext(DetailsContext);
    return (
        <p>{logo}</p>
    )
}

export default Logo;