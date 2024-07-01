import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Assets/Img/logo.png';
import './index.css';

// Importar Botão do StyledComponents
import { Botao } from '../../Components/StyledComponents/Botao';

// Login Google 
import HandleCredentialResponse from '../../Services/authGoogle';


export default class Home extends React.Component {
    
    render() {
        return(
            <div className='main_home'>
                <img src={logo} alt="Logo" />
                <h1>{this.props.titulo}</h1>
                <Link to='/MeusClientes' className='btn btn_gray'>Entrar</Link>
                
                <Botao tamanho="350">350px</Botao>
                <Botao tamanho="300">300px</Botao>
                <Botao>Padrão</Botao>
                <Botao>
                    <Link to={'/'}>Sair</Link>
                </Botao>
                <div id="buttonDiv"></div>

            </div>
        );
    }
}