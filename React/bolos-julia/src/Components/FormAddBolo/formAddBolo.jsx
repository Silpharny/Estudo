import React from "react";
import './formAddBolo.css'

export const FormAddBolo = () => {

    return(
        <div className="inputSection">
            <div className="inputDiv">
                <label htmlFor="bolo">Bolo</label>
                <input type="text" id="bolo"/>
            </div>
            <div className="inputDiv">
                <label htmlFor="preco">Preço</label>
                <input type="number" id="preco" />
            </div>
            <button>Cadastrar</button>
        </div>
    )
}


export default FormAddBolo