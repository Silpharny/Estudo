import React from "react";
import './genero.css'

import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import CadastroComIcon from "../../Components/CadastroComIcon/cadastroComIcon";

import OutputArea from '../../Components/OutputArea/outputArea'

import categoryIcon from '../../Assets/categoryIcon.svg'

export const Genero = () => {
    return (
        <div className="genero">
            <Header />
            <div className="main">
                <div className="textArea">
                    <p>Cadastre os gêneros de sua preferência</p>
                    <p>Prontos para cadastrar?</p>
                </div>
                <CadastroComIcon pageName="Gêneros" linkImg={categoryIcon} label="Gênero" placeholder="Digite o Gênero" />
                <OutputArea />
            </div>
            <Footer />
        </div>
    )
}

export default Genero