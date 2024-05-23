import React from "react";
import './card.css'

export const Card = () => {

    return(
        <div className="card">
            <div className="form">
                <input type="text" placeholder="Sil Miranda" />
                <input type="text" placeholder="999-999-999-99" />
                <input type="tel" placeholder="+55 21 99999-9999" />
            </div>
        </div>
    )

}

export default Card