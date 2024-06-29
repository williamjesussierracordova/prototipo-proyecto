import React from 'react';
import './App.css';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Novedad_page from './Novedades/novedad.jsx';

function Novedad(){
    return (
        <>
        <div className="App">
                <Body />
                <Header />
                <Novedad_page />
                <Footer />
        </div>
        </>
    )
}

export default Novedad;