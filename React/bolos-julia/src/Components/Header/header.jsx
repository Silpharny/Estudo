import React from "react"
import { Link } from "react-router-dom"
import logo from '../../Assets/logo.png'
import "./header.css"

export const Header = () => {
    
    return(
        <header>
            <img src={logo} alt="" />
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/sobre">Sobre</Link></li>
                <li><Link className="link" to="/bolos">Bolos</Link></li>
            </ul>
        </header>
    )
}

export default Header