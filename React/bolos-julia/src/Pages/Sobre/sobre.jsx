import React from "react";
import './sobre.css'
import { Link } from 'react-router-dom'


export const Sobre = () => {

    return(
        <div className="page_sobre">
            <h1>pagina sobre</h1>
            <Link to="/">Página inicial</Link>
            <Link to="/bolos">Página bolos</Link>
        </div>
    )
}

export default Sobre