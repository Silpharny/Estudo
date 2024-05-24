import React from "react";
import './card.css'

import InnerCard from "./innerCard/innerCard";

import StarIcon from "../../Assets/starIcon.svg"

export const Card = () => {
    return(
        <div>
            <InnerCard imgLink={StarIcon} />            
        </div>
    )
}

export default Card