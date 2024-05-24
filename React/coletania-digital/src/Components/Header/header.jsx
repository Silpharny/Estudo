import React from "react";
import './header.css'
import Logo from '../../Assets/logoIcon.png'

import { Link } from 'react-router-dom'

export const Header = (props) => {
    return(
        <div className="header">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <div className="textLogo">
                        <p>Filmes</p>
                        <p>Colections</p>
                    </div>
                </div>
                <nav>
                    <li><Link className={props.className} to="/">Home</Link></li>
                    <li><Link to="/usuario">Usuário</Link></li>
                    <li><Link to="/filmes">Filmes</Link></li>
                    <li><Link to="/genero">Gênero</Link></li>
                </nav>
            </div>
        </div>
    )
}

export default Header