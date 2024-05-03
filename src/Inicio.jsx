
import React from 'react';
import './App.css';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Navbar from './navbar/navbar.jsx';
import Slider from './sliderPrincipal/slider.jsx';
import Sectionmap from './map/map-section.jsx';
import Info from './info/info.jsx';

function Inicio(){
    return (
        <>
        <div className="App">
                <Body />
                <Header />
                <Navbar />
                <Slider />    
                <Info />   
                <Sectionmap />
                <Footer />
        </div>
        </>
    )
}

export default Inicio;