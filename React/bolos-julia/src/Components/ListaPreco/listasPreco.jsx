import React from "react";
import './listaPreco.css'

export const ListaPreco = () => {
    return(
    <div className="listaPreco">
        <div className="information">
            <p>Bolo de Fubá</p>
            <p className="cifrao">R$<span>15,00</span></p>
        </div>
        <div className="buttons">
            <button className="btnEdit">Editar</button>
            <button className="btnExcluir">Excluir</button>
        </div>
    </div>       
    )
}

export default ListaPreco