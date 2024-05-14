
import React from 'react';
import './App.css';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Navbar from './navbar/navbar.jsx';
import Novedades_p from './Novedades/novedades_page.jsx';

function Novedades(){
    return (
        <>
        <div className="App">
                <Body />
                <Header />
                {/* <Navbar /> */}
                <Novedades_p />
                <Footer />
        </div>
        </>
    )
}

export default Novedades;