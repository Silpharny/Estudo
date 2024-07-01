import React from "react";
import orangeTrash from "../../Assets/Img/orangeTrash.svg"


export const MyClients = () => {

    return(
        <div className="pg_MyClients">
            <div>
                <h1>Meus Clientes</h1>
                <button>+</button>
            </div>

            <section>

                <div>
                    <span>A</span>
                    <span>
                        <span>Sil Miranda - Vizinho</span>
                        <span>R$ 49,90</span>
                    </span>
                    <button>
                        <img src={orangeTrash} alt="delete items" />
                    </button>
                </div>

            </section>
        </div>
    )

}

export default MyClients;