import React from "react";
import './header.css'
import { Link } from 'react-router-dom'

import logo from '../../Assets/findVagas.svg'

export const Header = (props) => {
    
    return(
        <div className="header">
            <img src={logo} alt="logo" />
            <ul>
                <Link className="link" id={props.perfil} to="/">Perfil</Link>
                <Link className="link" id={props.vagas} to="/vagas">Vagas</Link>
                <Link className="link" id={props.cadastrar} to="/cadastrar">Cadastrar</Link>
            </ul>
        </div>
    )
}

export default Header