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
]


function carouselDemo() {
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

                        <Button color="blue" fullWidth mt="md" radius="md">
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
