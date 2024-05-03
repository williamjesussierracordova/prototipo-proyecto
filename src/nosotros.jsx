
import React from 'react';
import './App.css';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Navbar from './navbar/navbar.jsx';
import Nosotros_p from './Nosotros/nosotros-p.jsx';
import Timeline from './Nosotros/timeline.jsx';
import Info from './info/info.jsx';
import Map from '../src/map/map-section.jsx';
import Demo from './Nosotros/acordion.jsx';

function Nosotros(){
    return (
        <>
        <div className="App">
                <Body />
                <Header />
                <Navbar />
                <Nosotros_p />
                <Info />
                <Timeline />
                <Map />
                <Footer />
        </div>
        </>
    )
}

export default Nosotros;