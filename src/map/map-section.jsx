import React from 'react';
import './map-section.css';

function map_section() {
    return(
        <div className=" ">
            <h1>Ubicación</h1>
            <div className="map-section">
                <div className='gmap-frame'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31210.967839248136!2d-77.003096!3d-12.086736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d374af6eef%3A0xdd62873e6d53e56b!2sGran%20Teatro%20Nacional%20del%20Per%C3%BA!5e0!3m2!1sen!2sus!4v1714581177503!5m2!1sen!2sus" width="850" height="500" ></iframe>
                </div>
                
                <div className="map-section__info">
                    <h1>Dirección</h1>
                    <p>Av. Javier Prado Este 2225, San Borja 15021, Perú</p>

                    <h1>Horario</h1>
                    <p>Lunes a Viernes: 9:00am - 6:00pm</p>

                    <h1>Como llegar</h1>
                    <p>La estación La cultura del metro de lima está a menos de 100 metros</p>
                </div>
        </div>
    </div>
    )
}

export default map_section;
