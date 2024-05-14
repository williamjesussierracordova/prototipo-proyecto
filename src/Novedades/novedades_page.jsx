import React, { useState } from "react";
import './novedades_page.css';
import { Card, Image, Text } from '@mantine/core';
import clancy from '../assets/clancy_tour.jpg';
import nbhd from '../assets/nbhd.jpg';
import cuco_tour from '../assets/cuco_tour.jpg';
import { Badge, Group } from '@mantine/core';
import { usePagination } from "@mantine/hooks";
import { Pagination } from "@mantine/core";
import tyler_piano from '../assets/tyler_piano.jpg';


const cards = [
    {
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '03 Feb 2025',
    },
    {
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '04 Feb 2025',
    },
    {
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '05 Feb 2025',
    },
    {
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '06 Feb 2025',
    },
    {
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '03 Feb 2025',
    },
    {
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '04 Feb 2025',
    },
    {
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '05 Feb 2025',
    },
    {
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '06 Feb 2025',
    },
    {
        Image: clancy,
        title: 'Musica',
        description: 'TØP conquista el mundo con su nuevo album',
        badge: '07 Feb 2025',
    },
    {
        Image: clancy,
        title: 'Musica',
        description: 'TØP conquista el mundo con su nuevo album',
        badge: '07 Feb 2025',
    },
    {
        Image: clancy,
        title: 'Musica',
        description: 'TØP conquista el mundo con su nuevo album',
        badge: '07 Feb 2025',
    },
    {
        Image: clancy,
        title: 'Musica',
        description: 'TØP conquista el mundo con su nuevo album',
        badge: '07 Feb 2025',
    },
    {
        Image: clancy,
        title: 'Musica',
        description: 'TØP conquista el mundo con su nuevo album',
        badge: '07 Feb 2025',
    },
    {
        Image: clancy,
        title: 'Musica',
        description: 'TØP conquista el mundo con su nuevo album',
        badge: '07 Feb 2025',
    },
    {
        Image: clancy,
        title: 'Musica',
        description: 'TØP conquista el mundo con su nuevo album',
        badge: '07 Feb 2025',
    },
    {
        Image: clancy,
        title: 'Musica',
        description: 'TØP conquista el mundo con su nuevo album',
        badge: '07 Feb 2025',
    }
]

const ItemsPerPage = 6 ; 

function Novedades() {
    const slides = cards.map((card, index) => (
        <Card component='a' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
         key={index} style={{width:350, height:'fit-content', flexDirection:'row-wrap', display:'flex'}} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={card.Image}
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{card.title}</Text>
                <Badge color="pink">{card.badge}</Badge>
            </Group>

            <Text size="lg" style={{fontSize:'20px', fontWeight:'bold'}}> 
                {card.description}
            </Text>

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
            <div className="title_novedades">
                <h1>Descubre GTN</h1>
            </div>
            <div className="novedades_principales">
                <div className="novedad_1">
                    <Card component='a' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    style={{width:'fit-content', height:'fit-content', objectFit:'contain' , flexDirection:'row-wrap', display:'flex' }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                                src={tyler_piano}
                                alt="Norway"
                                height= {400}
                                width='fit-content'
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Musica</Text>
                            <Badge color="pink">03 Feb 2025</Badge>
                        </Group>

                        <Text size="lg" style={{fontSize:'20px', fontWeight:'bold'}}> 
                            Tyler Joseph tocando el piano
                        </Text>
                    </Card>
                </div>
                {/* <div className="novedades_2">
                    <div className="novedades_2_1">
                        <div className="novedades_2_1_container">
                            <Card component='a' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                            style={{width:400, height:'fit-content', flexDirection:'row-wrap', display:'flex'}} shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src={cuco_tour}
                                        height={160}
                                        alt="Norway"
                                    />
                                </Card.Section>

                                <Group justify="space-between" mt="md" mb="xs">
                                    <Text fw={500}>Musica</Text>
                                    <Badge color="pink">03 Feb 2025</Badge>
                                </Group>

                                <Text size="lg" style={{fontSize:'20px', fontWeight:'bold'}}> 
                                    Cuco en Lima por primera vez
                                </Text>
                            </Card>
                        </div>
                    </div>
                    <div className="novedades_2_2">
                        <div className="novedades_2_2_container">
                            <Card component='a' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                            style={{width:400, height:'fit-content', flexDirection:'row-wrap', display:'flex'}} shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src={cuco_tour}
                                        height={160}
                                        alt="Norway"
                                    />
                                </Card.Section>

                                <Group justify="space-between" mt="md" mb="xs">
                                    <Text fw={500}>Musica</Text>
                                    <Badge color="pink">03 Feb 2025</Badge>
                                </Group>

                                <Text size="lg" style={{fontSize:'20px', fontWeight:'bold'}}> 
                                    Cuco en Lima por primera vez
                                </Text>
                            </Card>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="novedades_pagination">
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
            </div>

        </div>
    );
}

export default Novedades;   