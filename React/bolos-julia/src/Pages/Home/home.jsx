import React from "react";
import './home.css'

import bannerPrincipal from '../../Assets/bannerPrincipal.webp'
import Header from '../../Components/Header/header.jsx';
import Card from "../../Components/Card/card.jsx";
import CardAproveite from "../../Components/CardAproveite/cardAproveite.jsx";
import Footer from "../../Components/Footer/footer.jsx";

export const Home = () => {

    return(
        <div className="page_home">
            <Header />
            <main>
                <img src={bannerPrincipal} alt="Banner principal" />
                <Card />
                <CardAproveite />
                <Footer />
            </main>

        </div>
    )

}

export default Home 