import React, { useState } from "react";
import './espectaculos.css';
import { Card, Image, Text } from '@mantine/core';
import clancy from '../assets/clancy_tour.jpg';
import nbhd from '../assets/nbhd.jpg';
import cuco_tour from '../assets/cuco_tour.jpg';
import { Badge, Button, Group } from '@mantine/core';
import { usePagination } from "@mantine/hooks";
import CarouselDemo from '../carousel/carousel.jsx';
import { Pagination } from "@mantine/core";
import Slider from "../sliderPrincipal/slider.jsx";
import { useNavigate } from 'react-router-dom';
import cuco_pasarela from '../assets/cuco_pasarela.jpg';
import nbhd_pasarela from '../assets/nbhd_pasarela.jpg';
import top_pasarela from '../assets/top_pasarela.jpg';
import { useEffect } from "react";
import artic_slider from '../assets/artic_slider.avif';
import joji_pasarela from '../assets/joji_pasarela.jpg';
import artic_pasarela from '../assets/artic_pasarela.jpg';
import nbhd_slider from '../assets/nbhd_slider.jpg';
import cuco_slider from '../assets/cuco_slider.jpg';
import cuco_mobile from '../assets/cuco_mobile.jpg';
import nbhd_mobile from '../assets/nbhd_mobile.webp';

const cards = [
    {
        id:1,
        original: clancy,
        Image: clancy,
        image_mobile: top_pasarela,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        artist: 'Twenty One Pilots',
        image_pasarela: top_pasarela
    },
    {
        id:2,
        Image: nbhd_slider,
        original: nbhd_slider,
        image_mobile: nbhd_mobile,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        description: 'The Neighbourhood en Lima por primera vez',
        text_description: 'American alternative-rock band The Neighbourhood, sometimes written The NBHD, released a self-titled album in spring 2018. It follows earlier albums I Love You and Wiped Out! The Neighborhood are set to play shows in London and Manchester in spring 2020.',
        badge: '04 Nov 2025',
        message_button: 'Comprar Entradas',
        date: '2025-11-04T21:00:00-05:00',
        day: '04',
        month: 'Noviembre',
        open_door: '21:00',
        start: '23:00',
        min_price: 150,
        artist: 'The Neighbourhood',
        image_pasarela: nbhd_pasarela
    },
    {
        id:3,
        Image: cuco_slider,
        original: cuco_slider,
        image_mobile: cuco_mobile,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        description: 'Cuco en Lima por primera vez',
        text_description: 'Cuco is a Mexican-American singer-songwriter from Los Angeles. He first gained mainstream attention in 2016 with his single "Lo Que Siento", which garnered over 50 million streams on Spotify. Cuco released his debut album, Para Mi, in 2019.',
        badge: '04 Oct 2025',
        message_button: 'Comprar Entradas',
        date: '2025-10-04T21:00:00-05:00',
        day: '04',
        month: 'Octubre',
        open_door: '19:00',
        start: '20:00',
        min_price: 100,
        artist: 'Cuco',
        image_pasarela: cuco_pasarela
    },
    {
        id:4,
        Image: artic_slider,
        original: artic_slider,
        image_mobile: artic_slider,
        title: 'CAR TOUR',
        subtitle: 'ARTIC MONKEYS EN LIMA',
        description: 'Artic Monkeys en Lima por primera vez',
        text_description: 'The Arctic Monkeys are an English rock band formed in Sheffield in 2002. The group consists of Alex Turner, Jamie Cook, Nick OMalley, and Matt Helders. Former band member Andy Nicholson left the band in 2006 shortly after their debut album was released.',
        badge: '04 Sep 2025',
        message_button: 'Comprar Entradas',
        date: '2025-09-04T21:00:00-05:00',
        day: '04',
        month: 'Septiembre',
        open_door: '20:00',
        start: '21:00',
        min_price: 200,
        artist: 'Artic Monkeys',
        image_pasarela: artic_slider
    },
    {
        id:5,
        Image: joji_pasarela,
        original: joji_pasarela,
        image_mobile: joji_pasarela,
        title: 'BALLADS 1 TOUR',
        subtitle: 'JOJI EN LIMA',
        description: 'Joji en Lima por primera vez',
        text_description: 'George Kusunoki Miller, known professionally as Joji and formerly by his online aliases Filthy Frank and Pink Guy, is a Japanese singer, songwriter, record producer, author, and former Internet personality and comedian. He is known for his music and comedy content on YouTube and TVFilthyFrank.',
        badge: '09 Ago 2025',
        message_button: 'Comprar Entradas',
        date: '2025-08-09T21:00:00-05:00',
        day: '09',
        month: 'Agosto',
        open_door: '20:00',
        start: '21:00',
        min_price: 150,
        artist: 'Joji',
        image_pasarela: joji_pasarela
    },
    {
        id:1,
        original: clancy,
        Image: clancy,
        image_mobile: top_pasarela,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        artist: 'Twenty One Pilots',
        image_pasarela: top_pasarela
    },
    {
        id:2,
        Image: nbhd_slider,
        original: nbhd_slider,
        image_mobile: nbhd_mobile,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        description: 'The Neighbourhood en Lima por primera vez',
        text_description: 'American alternative-rock band The Neighbourhood, sometimes written The NBHD, released a self-titled album in spring 2018. It follows earlier albums I Love You and Wiped Out! The Neighborhood are set to play shows in London and Manchester in spring 2020.',
        badge: '04 Nov 2025',
        message_button: 'Comprar Entradas',
        date: '2025-11-04T21:00:00-05:00',
        day: '04',
        month: 'Noviembre',
        open_door: '21:00',
        start: '23:00',
        min_price: 150,
        artist: 'The Neighbourhood',
        image_pasarela: nbhd_pasarela
    },
    {
        id:3,
        Image: cuco_slider,
        original: cuco_slider,
        image_mobile: cuco_mobile,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        description: 'Cuco en Lima por primera vez',
        text_description: 'Cuco is a Mexican-American singer-songwriter from Los Angeles. He first gained mainstream attention in 2016 with his single "Lo Que Siento", which garnered over 50 million streams on Spotify. Cuco released his debut album, Para Mi, in 2019.',
        badge: '04 Oct 2025',
        message_button: 'Comprar Entradas',
        date: '2025-10-04T21:00:00-05:00',
        day: '04',
        month: 'Octubre',
        open_door: '19:00',
        start: '20:00',
        min_price: 100,
        artist: 'Cuco',
        image_pasarela: cuco_pasarela
    },
    {
        id:4,
        Image: artic_slider,
        original: artic_slider,
        image_mobile: artic_slider,
        title: 'CAR TOUR',
        subtitle: 'ARTIC MONKEYS EN LIMA',
        description: 'Artic Monkeys en Lima por primera vez',
        text_description: 'The Arctic Monkeys are an English rock band formed in Sheffield in 2002. The group consists of Alex Turner, Jamie Cook, Nick OMalley, and Matt Helders. Former band member Andy Nicholson left the band in 2006 shortly after their debut album was released.',
        badge: '04 Sep 2025',
        message_button: 'Comprar Entradas',
        date: '2025-09-04T21:00:00-05:00',
        day: '04',
        month: 'Septiembre',
        open_door: '20:00',
        start: '21:00',
        min_price: 200,
        artist: 'Artic Monkeys',
        image_pasarela: artic_slider
    },
    {
        id:5,
        Image: joji_pasarela,
        original: joji_pasarela,
        image_mobile: joji_pasarela,
        title: 'BALLADS 1 TOUR',
        subtitle: 'JOJI EN LIMA',
        description: 'Joji en Lima por primera vez',
        text_description: 'George Kusunoki Miller, known professionally as Joji and formerly by his online aliases Filthy Frank and Pink Guy, is a Japanese singer, songwriter, record producer, author, and former Internet personality and comedian. He is known for his music and comedy content on YouTube and TVFilthyFrank.',
        badge: '09 Ago 2025',
        message_button: 'Comprar Entradas',
        date: '2025-08-09T21:00:00-05:00',
        day: '09',
        month: 'Agosto',
        open_door: '20:00',
        start: '21:00',
        min_price: 150,
        artist: 'Joji',
        image_pasarela: joji_pasarela
    },
    {
        id:1,
        original: clancy,
        Image: clancy,
        image_mobile: top_pasarela,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        artist: 'Twenty One Pilots',
        image_pasarela: top_pasarela
    },
    {
        id:2,
        Image: nbhd_slider,
        original: nbhd_slider,
        image_mobile: nbhd_mobile,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        description: 'The Neighbourhood en Lima por primera vez',
        text_description: 'American alternative-rock band The Neighbourhood, sometimes written The NBHD, released a self-titled album in spring 2018. It follows earlier albums I Love You and Wiped Out! The Neighborhood are set to play shows in London and Manchester in spring 2020.',
        badge: '04 Nov 2025',
        message_button: 'Comprar Entradas',
        date: '2025-11-04T21:00:00-05:00',
        day: '04',
        month: 'Noviembre',
        open_door: '21:00',
        start: '23:00',
        min_price: 150,
        artist: 'The Neighbourhood',
        image_pasarela: nbhd_pasarela
    },
    {
        id:3,
        Image: cuco_slider,
        original: cuco_slider,
        image_mobile: cuco_mobile,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        description: 'Cuco en Lima por primera vez',
        text_description: 'Cuco is a Mexican-American singer-songwriter from Los Angeles. He first gained mainstream attention in 2016 with his single "Lo Que Siento", which garnered over 50 million streams on Spotify. Cuco released his debut album, Para Mi, in 2019.',
        badge: '04 Oct 2025',
        message_button: 'Comprar Entradas',
        date: '2025-10-04T21:00:00-05:00',
        day: '04',
        month: 'Octubre',
        open_door: '19:00',
        start: '20:00',
        min_price: 100,
        artist: 'Cuco',
        image_pasarela: cuco_pasarela
    },
    {
        id:4,
        Image: artic_slider,
        original: artic_slider,
        image_mobile: artic_slider,
        title: 'CAR TOUR',
        subtitle: 'ARTIC MONKEYS EN LIMA',
        description: 'Artic Monkeys en Lima por primera vez',
        text_description: 'The Arctic Monkeys are an English rock band formed in Sheffield in 2002. The group consists of Alex Turner, Jamie Cook, Nick OMalley, and Matt Helders. Former band member Andy Nicholson left the band in 2006 shortly after their debut album was released.',
        badge: '04 Sep 2025',
        message_button: 'Comprar Entradas',
        date: '2025-09-04T21:00:00-05:00',
        day: '04',
        month: 'Septiembre',
        open_door: '20:00',
        start: '21:00',
        min_price: 200,
        artist: 'Artic Monkeys',
        image_pasarela: artic_slider
    },
    {
        id:5,
        Image: joji_pasarela,
        original: joji_pasarela,
        image_mobile: joji_pasarela,
        title: 'BALLADS 1 TOUR',
        subtitle: 'JOJI EN LIMA',
        description: 'Joji en Lima por primera vez',
        text_description: 'George Kusunoki Miller, known professionally as Joji and formerly by his online aliases Filthy Frank and Pink Guy, is a Japanese singer, songwriter, record producer, author, and former Internet personality and comedian. He is known for his music and comedy content on YouTube and TVFilthyFrank.',
        badge: '09 Ago 2025',
        message_button: 'Comprar Entradas',
        date: '2025-08-09T21:00:00-05:00',
        day: '09',
        month: 'Agosto',
        open_door: '20:00',
        start: '21:00',
        min_price: 150,
        artist: 'Joji',
        image_pasarela: joji_pasarela
    },
    {
        id:1,
        original: clancy,
        Image: clancy,
        image_mobile: top_pasarela,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        artist: 'Twenty One Pilots',
        image_pasarela: top_pasarela
    },
    {
        id:2,
        Image: nbhd_slider,
        original: nbhd_slider,
        image_mobile: nbhd_mobile,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        description: 'The Neighbourhood en Lima por primera vez',
        text_description: 'American alternative-rock band The Neighbourhood, sometimes written The NBHD, released a self-titled album in spring 2018. It follows earlier albums I Love You and Wiped Out! The Neighborhood are set to play shows in London and Manchester in spring 2020.',
        badge: '04 Nov 2025',
        message_button: 'Comprar Entradas',
        date: '2025-11-04T21:00:00-05:00',
        day: '04',
        month: 'Noviembre',
        open_door: '21:00',
        start: '23:00',
        min_price: 150,
        artist: 'The Neighbourhood',
        image_pasarela: nbhd_pasarela
    },
    {
        id:3,
        Image: cuco_slider,
        original: cuco_slider,
        image_mobile: cuco_mobile,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        description: 'Cuco en Lima por primera vez',
        text_description: 'Cuco is a Mexican-American singer-songwriter from Los Angeles. He first gained mainstream attention in 2016 with his single "Lo Que Siento", which garnered over 50 million streams on Spotify. Cuco released his debut album, Para Mi, in 2019.',
        badge: '04 Oct 2025',
        message_button: 'Comprar Entradas',
        date: '2025-10-04T21:00:00-05:00',
        day: '04',
        month: 'Octubre',
        open_door: '19:00',
        start: '20:00',
        min_price: 100,
        artist: 'Cuco',
        image_pasarela: cuco_pasarela
    },
    {
        id:4,
        Image: artic_slider,
        original: artic_slider,
        image_mobile: artic_slider,
        title: 'CAR TOUR',
        subtitle: 'ARTIC MONKEYS EN LIMA',
        description: 'Artic Monkeys en Lima por primera vez',
        text_description: 'The Arctic Monkeys are an English rock band formed in Sheffield in 2002. The group consists of Alex Turner, Jamie Cook, Nick OMalley, and Matt Helders. Former band member Andy Nicholson left the band in 2006 shortly after their debut album was released.',
        badge: '04 Sep 2025',
        message_button: 'Comprar Entradas',
        date: '2025-09-04T21:00:00-05:00',
        day: '04',
        month: 'Septiembre',
        open_door: '20:00',
        start: '21:00',
        min_price: 200,
        artist: 'Artic Monkeys',
        image_pasarela: artic_slider
    },
    {
        id:5,
        Image: joji_pasarela,
        original: joji_pasarela,
        image_mobile: joji_pasarela,
        title: 'BALLADS 1 TOUR',
        subtitle: 'JOJI EN LIMA',
        description: 'Joji en Lima por primera vez',
        text_description: 'George Kusunoki Miller, known professionally as Joji and formerly by his online aliases Filthy Frank and Pink Guy, is a Japanese singer, songwriter, record producer, author, and former Internet personality and comedian. He is known for his music and comedy content on YouTube and TVFilthyFrank.',
        badge: '09 Ago 2025',
        message_button: 'Comprar Entradas',
        date: '2025-08-09T21:00:00-05:00',
        day: '09',
        month: 'Agosto',
        open_door: '20:00',
        start: '21:00',
        min_price: 150,
        artist: 'Joji',
        image_pasarela: joji_pasarela
    }
];

const ItemsPerPage = 6 ; 

function Espectaculos() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const slides = cards.map((card, index) => (
        <Card style={{width:350, flexDirection:'row-wrap', display:'flex' }} key={index} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={card.Image}
                    height={200}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{card.title}</Text>
                <Badge color="pink">{card.badge}</Badge>
            </Group>

            <Text size="sm" c="dimmed">
                {card.description}
            </Text>


            <Button color="blue" fullWidth mt="md" radius="md" onClick={() => navigate(`/eventos/${card.Id}`, { state: { card } })} > 
                {card.message_button}
            </Button>
        </Card>
    ));

    
    const [visibleEvents, setVisibleEvents] = useState(
        slides.slice(0, ItemsPerPage)
    );

    const pagination = usePagination({
        total: slides.length/ItemsPerPage,
        initialPage: 1,
        onChange(page){
            const star = (page - 1) * ItemsPerPage;
            const end = star + ItemsPerPage;
            setVisibleEvents(slides.slice(star, end));
        }
    });

    return (
        <div className="novedades_page">
            <div className="slider_events">
                <Slider />
            </div>
            <div className="novedades_pagination">
                <h1>Próximos eventos</h1>
                <div className="carousel_events">
                    <CarouselDemo />
                </div>
                <div className="pagination">
                    <h1>Eventos </h1>
                    <div style={{display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                        }} className="novedades_slides" >
                            {visibleEvents.map((slide) => (
                                <div key={slide} className="slide_events" >
                                    {slide}
                                </div>
                            ))}
                    </div>
                    <div className="pagination_buttons">
                        {
                            <Pagination
                                total={slides.length/ItemsPerPage}
                                value={pagination.page}
                                onChange={pagination.setPage}
                            />
                            // pagination.range.map(range => (
                            //     // <button key={range} onClick={() => pagination.setPage(range)}>{range}</button>
                            // ))
                        }
                    </div>
                <div/>
            </div>
        </div>
    </div>
    );
}

export default Espectaculos;   