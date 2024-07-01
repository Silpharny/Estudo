import React, { useState } from 'react'
import './style.css' 
import { apiFinancas } from '../../Services/api'

export const Modal = ({acao, mostrar, funcao}) => {

    const [valorInput, setValorInput] = useState('')


    //Adicionando Usuário - CRUD -> Create

    const RealizarAcao = () => {
        if(acao === "Cadastrar Clientes"){
            apiFinancas.post('clientes', {name:valorInput})
            .then(() => {window.location.reload() })
        }
    }
    
    return (
        <div className={`${mostrar} modal`}>
            <button className='btn btn_gray btn_close' onClick={funcao}>x</button>

            {/* Atribuindo input a uma variável */}

            <input 
                type="text" 
                placeholder='Nome' 
                value={valorInput} 
                onChange={(event) => setValorInput(event.target.value) } 
            />
            
            <button 
                className='btn btn_gray btn_save'
                onClick={() => RealizarAcao()}
            >
                    {acao}
            </button>

        </div>
    )
}

export default Modal