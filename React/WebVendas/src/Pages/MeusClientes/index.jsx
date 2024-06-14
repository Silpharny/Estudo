import React, { useEffect, useState } from "react";
import './index.css';
import Cliente from "../../Components/Cliente";
import Modal from "../../Components/Modal";
import { apiFinancas } from "../../Services/api";

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

    // Ciclo de vida - useEffect

    useEffect(() => {
        
        ListarClientes()

    },[])

    return(
        <div className="main_meus_clientes">
            <div className="topo">
                <h1>Meus Clientes</h1>
                <button className="btn btn_gray" onClick={() => openModal(modal)}>+</button>
            </div>

            <Modal acao="Cadastrar Clientes" mostrar={modal} funcao={openModal} />

            <section>
                {clientes.map((item) => <Cliente objeto={item} key={item.id} /> )}
            </section>
        </div>
    );

}

export default MeusClientes;