import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './slider.css';
import clancy from '../assets/clancy_tour.jpg';
import { useNavigate } from 'react-router-dom';
import cuco_pasarela from '../assets/cuco_pasarela.jpg';
import nbhd_pasarela from '../assets/nbhd_pasarela.jpg';
import top_pasarela from '../assets/top_pasarela.jpg';
import nbhd_slider from '../assets/nbhd_slider.jpg';
import cuco_slider from '../assets/cuco_slider.jpg'; 
import cuco_mobile from '../assets/cuco_mobile.jpg';
import nbhd_mobile from '../assets/nbhd_mobile.webp';
import artic_pasarela from '../assets/artic_pasarela.jpg';
import { readEvents } from '../Firebase/eventManage/eventManage.js';
import { readAtraction } from '../Firebase/atractionsManage/atractionsManage.js';
import { readImage } from '../Firebase/imageManage/imageManage.js';
import { useEffect } from 'react';
import { useState } from 'react';
import artic_slider from '../assets/artic_slider.avif';
import joji_pasarela from '../assets/joji_pasarela.jpg';

function Slider() {

    const images = [
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

    const [eventosCompletos, setEventosCompletos] = useState([]);
    const [eventosDestructurados, setEventosDestructurados] = useState([]);
    let eventosTempo = [];
    const getEventos = async () => {
        const eventosLista = await readEvents();
        
        for (let i = 1; i < eventosLista.length; i++) {
            const atraction = await readAtraction(eventosLista[i].idAttraction);
            let eventoCompleto = {
                ...eventosLista[i],
                ...atraction
            };
            eventosTempo.push(eventoCompleto);
        }
    }
    let eventosTemp = [];
    const desestructuraciónEventos = async () => {
        
        for (let i = 0; i < eventosCompletos.length; i++) {
            let imagenPasarela = '';
            let imagenMobile = '';
            let imagenSlider = '';
            for (let n = 0; n < eventosCompletos[i].idImages.length; n++) {
                try {
                    const imagen = await readImage(eventosCompletos[i].idImages[n]);
                    if (imagen.typeImage === 'pasarela') {
                        imagenPasarela = imagen.urlImage;
                    } else if (imagen.typeImage === 'mobile') {
                        imagenMobile = imagen.urlImage;
                    } else if (imagen.typeImage === 'slider') {
                        imagenSlider = imagen.urlImage;
                    } else {
                        console.log('Error en la lectura de la imagen: tipo desconocido');
                    }
                } catch (error) {
                    console.log('Error al leer la imagen:', error);
                }
            }
            eventosTemp.push({
                ...eventosCompletos[i],
                imagenPasarela,
                imagenMobile,
                imagenSlider
            });
        }
    }

    const navigate = useNavigate();

    const renderImage = (item) => {
        return (
            <div onClick={() => navigate(`/eventos/${item.id}`, { state: { card: item } })} style={{ cursor: 'pointer', height:'470px'}}>
                <img src={item.original} alt="hola" style={{ width: '100%', height: 'fit-content', objectFit: 'cover' }} />
            </div>
        );
    }

    const imagesMobile = (item) => {
        return (
            <div onClick={() => navigate(`/eventos/${item.id}`, { state: { card: item } })} style={{ cursor: 'pointer' }}>
                <img src={item.image_mobile} alt="holaaaaaa" style={{ width: '400px', height: '450px', objectFit: 'cover' }} />
            </div>
        );
    }

    useEffect(() => {
        const fetchData = async () => {
            await getEventos();
            setEventosCompletos(eventosTempo);
            await desestructuraciónEventos();
            setEventosDestructurados(eventosTemp);
            console.log(eventosDestructurados);
        };
        fetchData();
    },[]); // Ejecuta solo una vez al montar el componente

    return (
        <div className='Slider'>
            <ImageGallery items={images}
                renderItem={
                    /* necesito validar que si es mobile muestre la imagen mobile */
                    (item) => window.innerWidth < 768 ? imagesMobile(item) : renderImage(item)
                }
                disableThumbnailScroll={false}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                showBullets={true}
                showNav={true}
                autoPlay={true} /*deslizar automaticamente*/
                slideDuration={500}
            />
        </div>
    );
}

export default Slider;