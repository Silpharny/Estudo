import React from "react";
import "./usuario.css";

import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import CadastroArea from "../../Components/CadastroArea/cadastroArea";
import OutputArea from "../../Components/OutputArea/outputArea";

export const Usuario = () => {
  return (
    <div className="usuario">
      <Header className="headerUsuario" />
      <div className="main">
        <div className="textArea">
          <p>Faça o cadastro de usuário e edite, caso necessário</p>
          <p>Pronto para cadastrar?</p>
        </div>
        <CadastroArea />
        <OutputArea />
      </div>
      <Footer />
    </div>
  );
};

export default Usuario;
