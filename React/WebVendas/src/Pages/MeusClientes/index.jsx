import React, { useEffect, useState } from "react";
import './index.css';
import Cliente from "../../Components/Cliente";
import Modal from "../../Components/Modal";
import { apiFinancas } from "../../Services/api";
import { Logout } from "../../Components/Logout";

export const MeusClientes = () => {

    //UseState - Leitura/Escrita

    const [modal, setModal] = useState('hidden')

    const openModal = (estadoAtual) => {
         
        if(estadoAtual === 'hidden'){
            setModal('show')
        } else {
            setModal('hidden')
        }
    }

    // Listar clientes - CRUD -> Read

    const [clientes, setClientes] = useState([])

    const ListarClientes = () => {
        apiFinancas.get('clientes')
        .then(res => {
            setClientes(res.data)
        })

    }

    const AuthData = () => {
        // Pegando dados de autenticação
        let token = localStorage.getItem('token')
        console.log(JSON.parse(token));

        let tokenEmJson = JSON.parse(token)
        let nameData = tokenEmJson.given_name
        console.log(nameData);

        return nameData
    }
    
    // Ciclo de vida - useEffect

    useEffect(() => {
        
        ListarClientes()
        AuthData()
    },[])

    return(
        <div className="main_meus_clientes">
            <div className="topo">
                <div>
                <h1>Meus Clientes</h1>
                <h4>Olá {AuthData()}</h4>
                </div>
                <button className="btn btn_gray" onClick={() => openModal(modal)}>+</button>
                <Logout/>
            </div>

            <Modal acao="Cadastrar Clientes" mostrar={modal} funcao={openModal} />

            <section>
                {clientes.map((item) => <Cliente objeto={item} key={item.id} /> )}
            </section>
        </div>
    );

}

export default MeusClientes;