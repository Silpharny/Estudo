import React from "react";
import './home.css'

import Header from "../../Components/Header/header";
import Card from "../../Components/Card/card";

export const Home = () => {

    return(
        <div className="home">
            <Header className="headerHome" />
            <div className="main">
                <Card/>
            </div>
        </div>
    )
}

export default Home