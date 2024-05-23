import React from "react";
import './perfil.css'
import Header from "../../Components/Header/header.jsx";
import Button from "../../Components/button/button.jsx";
import Card from "../../Components/Card/card.jsx";


export const Perfil = () => {

    return(
        <div className="profilePage">
            <Header perfil="perfil" />
            <div className="container">
            <Card />
            <Button name='Salvar' />
            </div>
        </div>
    )

}

export default Perfil