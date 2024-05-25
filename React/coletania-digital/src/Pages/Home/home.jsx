import React from "react";
import './home.css'

import Header from "../../Components/Header/header";
import Card from "../../Components/Card/card";
import Footer from "../../Components/Footer/footer";

export const Home = () => {

    return(
        <div className="home">
            <Header />
            <div className="main">
                <div className="texts">
                    <h1>Monte sua coletânea de filmes...</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ex.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur recusandae vitae. Quod illum rerum quidem minus nulla porro laborum?</p>
                </div>
                <Card/>
            </div>
            <Footer />
        </div>
    )
}

export default Home