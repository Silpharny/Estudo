import React from "react";
import './card.css'

import InnerCard from "./innerCard/innerCard";

import FilmIcon from "../../Assets/filmIcon.svg"
import StarIcon from "../../Assets/starIcon.svg"
import CategoryIcon from "../../Assets/categoryIcon.svg"

export const Card = () => {
    return(
        <div className="card">
            <InnerCard imgLink={FilmIcon} title="Filmes" />            
            <InnerCard imgLink={StarIcon} title="Avaliações" />            
            <InnerCard imgLink={CategoryIcon} title="Categoria" />            
        </div>  
    )
}

export default Card