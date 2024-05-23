import React from "react";
import './cadastrar.css'

import Header from '../../Components/Header/header'
import Card from '../../Components/Card/card'
import Button from '../../Components/button/button'


export const Cadastrar = () => {

    return(
        <div className="cadastrarPage">
            <Header cadastrar="cadastrar" />
            <div className="container">
                <Card />
                <Button name="Cadastrar" />
            </div>
        </div>
    )
}

export default Cadastrar