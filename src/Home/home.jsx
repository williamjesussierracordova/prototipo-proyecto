import React from 'react';

import Slider from '../sliderPrincipal/slider.jsx';
import Sectionmap from '../map/map-section.jsx';
import Info from '../info/info.jsx';
import './home.css';
import CarouselDemo from '../carousel/carousel.jsx';
import '@mantine/carousel/styles.css';

function Home(){
    return (
        <>
        <div className="Home">
            <div className='slider_home'>
                <Slider /> 
            </div>
            <div className='carousel_home'>
                <h1>Próximos eventos</h1>
                <CarouselDemo />
            </div>
            <div className='Info_home'>
                <Info />
            </div>
            <div className='map_home'>
                <Sectionmap />
            </div>
        </div>
        </>
    )
}

export default Home;