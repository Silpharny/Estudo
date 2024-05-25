import React from "react";
import './innerCard.css';

export const InnerCard = (props) => {
    return(
        <div className="innerCard">
            <img src={props.imgLink} alt="icon" />
            <div className="text">
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse quam facilis nulla molestias, voluptatum cumque quia consectetur est reprehenderit.</p>
            </div>
        </div>
    )
}

export default InnerCard