import React from "react";
import './innerCard.css';

export const InnerCard = (props) => {

    return(
        <div className="box">
        <img src={props.imgLink} alt="bolo" />
        <p>{props.cakeName}</p>
      </div>
    )
}

export default InnerCard