import React from "react";
import './header.css'
import Logo from '../../Assets/logoIcon.png'

import { Link } from 'react-router-dom'

export const Header = () => {
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
                    <Link to="/">Home</Link>
                    <Link to="/usuario">Usuário</Link>
                    <Link to="/filmes">Filmes</Link>
                    <Link to="/genero">Gênero</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header