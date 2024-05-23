import React from "react";
import './vagas.css'
import Header from "../../Components/Header/header";
import Button from "../../Components/button/button";
import Card from "../../Components/Card/card";

export const Vagas = () => {

    return(
        <div className="vagasPage">
            <Header vagas="vagas" />
            <div className="container">
                <Card />
                <Button name="Inscrever-se" />
            </div>
        </div>
    )
}

export default Vagas