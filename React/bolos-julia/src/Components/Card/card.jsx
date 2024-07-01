import React from "react";
import "./card.css";
import InnerCard from "../innerCard/innerCard";

import boloCenoura from '../../Assets/boloCenoura.webp' 
import boloFuba from '../../Assets/boloFuba.webp'
import boloLaranja from '../../Assets/boloLaranja.webp'


export const Card = () => {
  return (
    <>
      <section className="card">
        <h2>Mais Vendidos</h2>
          <div className="galeria">
            <InnerCard imgLink={boloCenoura} cakeName="Bolo de cenoura" />
            <InnerCard imgLink={boloFuba} cakeName="Bolo de fubá" />
            <InnerCard imgLink={boloLaranja} cakeName="Bolo de laranja" />
          </div>
      </section>
    </>
  );
};

export default Card;
