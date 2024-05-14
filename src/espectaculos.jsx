
import React from 'react';
import './App.css';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Navbar from './navbar/navbar.jsx';
import Espectaculos_p from './event_page/espectaculos_page.jsx';

function Espectaculos(){
    return (
        <>
        <div className="App">
                <Body />
                <Header />
                {/* <Navbar /> */}
                <Espectaculos_p />
                <Footer />
        </div>
        </>
    )
}

export default Espectaculos;