
import React from 'react';
import './App.css';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Event_page from './Espectaculo-event/event-page.jsx';

function espectaculo_page(){
    return (
        <>
        <div className="App">
                <Body />
                <Header />
                <Event_page />
                <Footer />
        </div>
        </>
    )
}

export default espectaculo_page;