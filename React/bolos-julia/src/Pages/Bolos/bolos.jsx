import React from "react";
import './bolos.css';

import Header from '../../Components/Header/header.jsx'
import Footer from '../../Components/Footer/footer.jsx'
import ListaPreco from "../../Components/ListaPreco/listasPreco.jsx";
import FormAddBolo from "../../Components/FormAddBolo/formAddBolo.jsx";

export const Bolos = () => {
    
    return(
        <div className="page_bolos">
            <Header />
            <main>
                <h2>Bolos</h2>
                <div className="global">
                    <div>
                        <ListaPreco />
                        <ListaPreco />
                        <ListaPreco />
                    </div>
                    <div>
                        <ListaPreco />
                        <ListaPreco />
                        <ListaPreco />
                    </div>
                </div>
                <FormAddBolo />
            </main>
            <Footer />
        </div>
    )
}

export default Bolos 