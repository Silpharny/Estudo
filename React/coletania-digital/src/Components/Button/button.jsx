import React from "react";
import './button.css'

export const Button = (props) => {

    return(
        <div className="button">
            <p>{props.textButton}</p>
        </div>
    )
}

export default Button