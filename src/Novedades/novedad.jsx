import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './novedad_page.css';

function Novedad_page() {
    const location = useLocation();
    const { card } = location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

  return (
    <div className="novedad_page" >
        <div className="novedad_page_title">
            <h1>{card.description}</h1>
        </div>
        <div className="novedad_page__image">
            <img src={card.Image} alt="novedad" style={{width:'100%',height:'300px'}}/>
        </div>
        <div className="novedad_informacion">
            <h4>{card.information}</h4>
        </div>

    </div>

  );
}

export default Novedad_page;