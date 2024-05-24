import React from "react";
import './innerCard.css';

export const InnerCard = (props) => {
    return(
        <div className="innerCard">
            <img src={props.imgLink} alt="icon" />
        </div>
    )
}

export default InnerCard