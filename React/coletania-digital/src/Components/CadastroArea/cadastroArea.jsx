import React from "react";
import "./cadastroArea.css";

import Button from '../../Components/Button/button'
import Input from "../../Components/input/input";

export const CadastroArea = () => {
  return (
    <div className="form">
      <div className="cadastroArea">
        <h3>Cadastro</h3>
        <div className="inputArea">
          <div className="inputs">
            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" id="name" />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <Input type="email" name="email" id="email" />
          </div>
          <div className="inputs">
            <label htmlFor="tel">Telefone</label>
            <Input type="tel" name="tel" id="tel" />
          </div>
        </div>
        <Button textButton="Cadastrar" />
      </div>
    </div>
  );
};

export default CadastroArea;
