import React from "react";
import './cadastroComIcon.css'

import Input from '../input/input'
import Button from '../Button/button'

export const CadastroComIcon = (props) => {
    return (
        <div className="form">
          <div className="cadastroComIcon">
            <h3>{props.pageName}</h3>
            <img src={props.linkImg} alt="icon" />
            <div className="inputArea">
              <div className="inputs">
                <label htmlFor="name">{props.label}</label>
                <Input type="text" name="name" id="name" placeholder={props.placeholder} />
              </div>
              <Button textButton="Cadastrar" />
            </div>
          </div>
        </div>
      );
}

export default CadastroComIcon