import React from "react";
import './header.css'

import { Link } from 'react-router-dom'
import Logo from "../Logo/logo";

export const Header = (props) => {
    return(
        <div className="header">
            <div className="container">
                <Logo />
                <nav>
                    <li><Link className="headerHome" to="/">Home</Link></li>
                    <li><Link className="headerUsuario" to="/usuario">Usuário</Link></li>
                    <li><Link className="headerFilmes" to="/filmes">Filmes</Link></li>
                    <li><Link className="headerGenero" to="/genero">Gênero</Link></li>
                </nav>
            </div>
        </div>
    )
}

export default Header