import React from "react";
import './cardAproveite.css'
import { Link } from 'react-router-dom';


export const CardAproveite = () => {

    return(
        <div className="cardAproveite">
            <h2>Aproveite</h2>
            <section className="section">
                <div className="box">
                    <h3>Clube Assinatura</h3>
                    <p>Se torne cliente fidelizado e receba divresas vantagens</p>
                    <Link className="button" to="/sobre">Saiba Mais</Link>
                </div>
                <div className="box">
                    <h3>Monte se bolo</h3>
                    <p>Escolha os ingredientes e receba um bolo feito para você!</p>
                    <Link className="button" to="/bolos">Saiba Mais</Link>
                </div>
            </section>
        </div>
    )

}

export default CardAproveite