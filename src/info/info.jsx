import React from "react";
import './info.css';
import gtn_fuera from "../assets/gtn_fuera.jpg";

function Info() {

    return(
        <div className="info_section">
            <h1>EL GRAN TEATRO NACIONAL</h1>
            <div className="info_tools">
                <div className="info__text">
                    <p>El Gran Teatro Nacional del Perú (o simplemente Gran Teatro Nacional) es un escenario multipropósito ubicado en el distrito de San Borja, en la ciudad de Lima, capital del Perú. Es el más grande del país, cuenta con una capacidad de 1.500 personas y es la casa de los Elencos Nacionales del Ministerio de Cultura del Perú: Orquesta Sinfónica Nacional del Perú, Ballet Nacional, Coro Nacional, Coro Nacional de Niños, Elenco Nacional de Folclore y Orquesta Sinfónica Nacional Juvenil Bicentenario. Fue inaugurado el 23 de julio de 20115 y se encuentra ubicado en el capitalino distrito de San Borja, en el cruce de las avenidas Javier Prado y Aviación.</p>
                </div>
                <div className="image__info">
                    <img src={gtn_fuera} alt="Gran Teatro Nacional" />
                </div>
            </div>
        </div>
    )
}

export default Info;
