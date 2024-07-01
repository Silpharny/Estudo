import React from "react";
import './outputArea.css'
import Button from "../Button/button";

export const OutputArea = (props) => {
    return(
        <div className="outputArea">
            <div className="listaCadastro">
                <p>{props.name}</p>
                <p>{props.email}</p>
                <p>{props.tel}</p>
                <div className="buttons">
                    <Button textButton="Editar" />
                    <Button textButton="Excluir" />
                </div>
            </div>
        </div>
    )
}

export default OutputArea