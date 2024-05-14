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

const cards = [
    {
        Image: clancy,
        title: 'THE CLANCY TOUR',
        description:'Twenty one pilots en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: nbhd,
        title: 'THE NBHD TOUR',
        description: 'The Neighbourhood en Lima por primera vez',
        badge: 'On Sale',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: clancy,
        title: 'THE CLANCY TOUR',
        description:'Twenty one pilots en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: nbhd,
        title: 'THE NBHD TOUR',
        description: 'The Neighbourhood en Lima por primera vez',
        badge: 'On Sale',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: nbhd,
        title: 'THE NBHD TOUR',
        description: 'The Neighbourhood en Lima por primera vez',
        badge: 'On Sale',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: nbhd,
        title: 'THE NBHD TOUR',
        description: 'The Neighbourhood en Lima por primera vez',
        badge: 'On Sale',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: nbhd,
        title: 'THE NBHD TOUR',
        description: 'The Neighbourhood en Lima por primera vez',
        badge: 'On Sale',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: nbhd,
        title: 'THE NBHD TOUR',
        description: 'The Neighbourhood en Lima por primera vez',
        badge: 'On Sale',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: nbhd,
        title: 'THE NBHD TOUR',
        description: 'The Neighbourhood en Lima por primera vez',
        badge: 'On Sale',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR2',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR2',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    },
    {
        Image: cuco_tour,
        title: 'CUCO TOUR2',
        description: 'Cuco en Lima por primera vez',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas'
    }
]

const ItemsPerPage = 6 ; 

function Espectaculos() {
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

            <Button color="blue" fullWidth mt="md" radius="md">
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
                <h1>Próximos Eventos</h1>
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