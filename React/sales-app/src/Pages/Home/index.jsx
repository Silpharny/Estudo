import React from "react";
import logo from "../../Assets/Img/logoSalesApp.svg"
import { Link } from "react-router-dom";

import './index.css';

export default class Home extends React.Component {

    render() {
        
        return(
            <div className="pg_Home">
                <img src={logo} alt="Sales App Logo" />
                <Link to='/MyClients' className="btn">Entrar</Link>
            </div>
        )
    }
}