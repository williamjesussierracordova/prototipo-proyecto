import React from "react";
import './pasarela_entrada.css';

const evento = [
    {
        id: 1,
        nombre: "The clancy world tour",
        artista: "Twenty one pilots",
        fecha: Date(2025,2,15)
    }
]

const Pasarela_Entrada = () => {
    return (
        <div>
            <h1>Proximos eventos</h1>
            <div>
                {evento.map((evento) => (
                    <div key={evento.id}>
                        <h2>{evento.nombre}</h2>
                        <p>{evento.artista}</p>
                        <p>{evento.fecha}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pasarela_Entrada;