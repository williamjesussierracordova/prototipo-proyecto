import React from "react";
import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
import Body from "./body/body.jsx";
import Pasarela_Entrada from "./pasarela_entrada/pasarela_entrada.jsx";

function Pasarela_Entrada_Page() {
    return (
        <>
        <div className="App">
                <Body />
                <Header />
                <Pasarela_Entrada />
                <Footer />
        </div>
        </>
    )
}

export default Pasarela_Entrada_Page