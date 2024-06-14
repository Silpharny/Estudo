import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Assets/Img/logo.png';
import './index.css';


export default class Home extends React.Component {
    
    render() {
        return(
            <div className='main_home'>
                <img src={logo} alt="Logo" />
                <h1>{this.props.titulo}</h1>
                <Link to='/MeusClientes' className='btn btn_gray'>Entrar</Link>
            </div>
        );
    }
}