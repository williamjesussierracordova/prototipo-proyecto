
import React from 'react';
import './App.css';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Navbar from './navbar/navbar.jsx';
import Home from './Home/home.jsx';

function Inicio(){
    return (
        <>
        <div className="App"  >
                <Body />
                <Header />
                <Home />
                <Footer />
        </div>
        </>
    )
}

export default Inicio;