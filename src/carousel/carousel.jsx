import React from "react";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import clancy from '../assets/clancy_tour.jpg';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import nbhd from '../assets/nbhd.jpg';
import cuco_tour from '../assets/cuco_tour.jpg';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Grid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import cuco_pasarela from '../assets/cuco_pasarela.jpg';
import nbhd_pasarela from '../assets/nbhd_pasarela.jpg';
import top_pasarela from '../assets/top_pasarela.jpg';


const cards = [
    {
        Id:1,
        Image: clancy,
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
        Id:2,
        Image: nbhd,
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
        Id:3,
        Image: cuco_tour,
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
        Id:1,
        Image: clancy,
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
        Id:2,
        Image: nbhd,
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
        Id:3,
        Image: cuco_tour,
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
]

function carouselDemo() {
    const navigate = useNavigate();

    const slides = cards.map((card, index) => (
        <Carousel.Slide key={card.title}>
            <Grid justify="space-around">
                <Grid.Col style={{maxWidth:400 , objectFit:'cover' , width:0.5 ,height:'fit-content' }} sm={4} xs={4} >
                    <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
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

                        <Button color="blue" fullWidth mt="md" radius="md" onClick={() => navigate('/evento', { state: { card } })}>
                            {card.message_button}
                        </Button>
                    </Card>
                </Grid.Col>
            </Grid>
      </Carousel.Slide>
    ));

    return (
        <Grid justify="space-around">
            <Grid.Col style={{maxWidth:'100%', objectFit:'cover'}} sm={4} xs={4}   >
                <Carousel
                    //   slideSize={{ base: '100%', sm: '50%' }}
                    //   slideGap={{ base: 'xl', sm: 50 }}
                    //   align={'start'}                    
                    withIndicators 
                    slideSize={{ base: '100%', md: '30%' }} /* tamaño de las tarjetas */
                    slideGap={{ base: 0, sm: 'md' }}
                    loop
                    align="start"
                    slidesToScroll={1}
                    nextControlIcon={<FaArrowCircleRight style={{ width: 32 , height: 32, color:"black"}} />}
                    previousControlIcon={<FaArrowCircleLeft style={{ width: 32 , height: 32}} />}
                >
                 {slides} 
                </Carousel>
            </Grid.Col>
        </Grid>
    )
  }

export default carouselDemo;
