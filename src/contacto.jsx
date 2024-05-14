
import React from 'react';
import './App.css';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Navbar from './navbar/navbar.jsx';
import Contacto from './Contacto/contacto-p.jsx';

function Inicio(){
    return (
        <>
        <div className="App">
                <Body />
                <Header />
                {/* <Navbar /> */}
                <Contacto />
                <Footer />
        </div>
        </>
    )
}

export default Inicio;