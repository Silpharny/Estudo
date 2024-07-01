import React from "react";
import './input.css'

export const Input = (props) => {
    return(
        <div className="input">
            <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} />
        </div>
    )
}

export default Input