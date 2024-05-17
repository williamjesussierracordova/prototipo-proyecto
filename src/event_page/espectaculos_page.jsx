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

const cards = [
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    {
        Id:1,
        Image: clancy,
        title: 'THE CLANCY TOUR',
        subtitle: 'TWEENTY ONE PILOTS EN LIMA',
        description:'Twenty one pilots en Lima por primera vez',
        artist: 'Twenty One Pilots',
        text_description: 'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.',
        badge: '02 Feb 2025',
        message_button: 'Comprar Entradas',
        date: '2025-02-02T21:00:00-05:00',
        day: '02',
        month: 'Febrero',
        open_door: '21:00',
        start: '22:00',
        min_price: 250,
        image_pasarela: top_pasarela
    },
    {
        Id:2,
        Image: nbhd,
        title: 'THE NBHD TOUR',
        subtitle: 'THE NEIGHBOURHOOD EN LIMA',
        artist: 'The Neighbourhood',
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
        image_pasarela: nbhd_pasarela
    },
    {
        Id:3,
        Image: cuco_tour,
        title: 'CUCO TOUR',
        subtitle: 'CUCO EN LIMA',
        artist: 'Cuco',
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
        image_pasarela: cuco_pasarela
    },
    
]

const ItemsPerPage = 6 ; 

function Espectaculos() {
    const navigate = useNavigate();

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


            <Button color="blue" fullWidth mt="md" radius="md" onClick={() => navigate('/evento', { state: { card } })} >
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