import React from "react";
import "./card.css";

import boloCenoura from '../../Assets/boloCenoura.webp'
import boloFuba from '../../Assets/boloFuba.webp'
import boloLaranja from '../../Assets/boloLaranja.webp'

export const Card = () => {
  return (
    <>
      <section className="card">
        <h2>Mais Vendidos</h2>

        <div className="galeria">
          <div className="box">
            <img src={boloCenoura} alt="bolo de cenoura" />
            <p>Bolo de cenoura</p>
          </div>

          <div className="box">
            <img src={boloFuba} alt="bolo de fubá" />
            <p>Bolo de fubá</p>
          </div>

          <div className="box">
            <img src={boloLaranja} alt="bolo de laranja" />
            <p>Bolo de laranja</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
