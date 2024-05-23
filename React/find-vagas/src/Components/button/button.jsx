import React from "react";
import './button.css'

export const Button = (props) => {

    return(
        <div>
            <button className="button">{props.name}</button>
        </div>
    )

}

export default Button