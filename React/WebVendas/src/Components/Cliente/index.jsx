import React, { useState } from "react";
import './style.css';
import lixeira from '../../Assets/Img/lixeira_roxa.png'

import {apiFinancas} from '../../Services/api'

export const Cliente = ({objeto}) => {

    const [modal, setModal] = useState('hidden')

    const openModal = (estadoAtual) => {

        if(estadoAtual === 'hidden') {
            setModal('show')
        } else {
            setModal('hidden')
        }
    }

    // Alterar Cliente - CRUD -> Update

    const [updateValor, setUpdateValor] = useState(objeto.name)

    const alterar = () => {
        
        apiFinancas.put(`clientes/${objeto.id}`, {name:updateValor})
        .then(() => {
            openModal()
            window.location.reload()
        })
    }


    // Excluir item - CRUD -> Delete

    const excluirItem = () => {
        apiFinancas.delete(`clientes/${objeto.id}`)
        .then(() => {
            window.location.reload()
        })
    }
    
    return(
        <div className="cliente">
    
            <span className="inicial" onClick={() => openModal(modal)}>{objeto.name[0]}</span>
            <span className="nome">
                {objeto.name}
                <span className="preco">
                    R$ {objeto.saldos.reduce( (total,item) => total += parseFloat(item.value), 0).toFixed(2)}
                </span>
            </span>
            <button 
                className="btn"
                onClick={excluirItem}
            >
                <img src={lixeira} alt="Excluir item" />
            </button>

            <div className={`update ${modal}`}>
                <input 
                    className="input" 
                    type="text" 
                    value={updateValor} 
                    onChange={(e) => setUpdateValor(e.target.value)}
                />
                <button 
                    className="btn btn_gray"
                    onClick={ () => alterar()}
                >
                    Salvar
                </button>
            </div>
        </div>
    )
}

export default Cliente;