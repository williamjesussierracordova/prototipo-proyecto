import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import pandemonium from '../assets/pandemonium.png';
import './slider.css';
import clancy from '../assets/clancy_tour.jpg';
import nbhd from '../assets/nbhd.jpg';
import cuco_tour from '../assets/cuco_tour.jpg';
import { useNavigate } from 'react-router-dom';
import cuco_pasarela from '../assets/cuco_pasarela.jpg';
import nbhd_pasarela from '../assets/nbhd_pasarela.jpg';
import top_pasarela from '../assets/top_pasarela.jpg';

function Slider() {
    const images = [
        // {
        //     original: clancy,
        //     thumbnail: 'https://picsum.photos/id/1018/250/150/',
        //     url: '/espectaculos',// Cambia esto a la URL a la que quieres redirigir al usuario,
        //     id: 1
        // },
        // {
        //     original: pandemonium,
        //     thumbnail: 'https://picsum.photos/id/1015/250/150/',
        //     url: 'https://jojimusic.com/', // Cambia esto a la URL a la que quieres redirigir al usuario.
        //     id: 2
        // },
        // {
        //     original: nbhd,
        //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
        //     url: 'https://jojimusic.com/', // Cambia esto a la URL a la que quieres redirigir al usuario
        //     id: 3
        // },
        // {
        //     original: 'https://picsum.photos/id/1020/1920/650/',
        //     thumbnail: 'https://picsum.photos/id/1020/250/150/',
        //     url: 'https://jojimusic.com/', // Cambia esto a la URL a la que quieres redirigir al usuario
        //     id: 1
        // },
        // {
        //     original: cuco_tour,
        //     thumbnail: 'https://picsum.photos/id/1020/250/150/',
        //     url: 'https://jojimusic.com/', // Cambia esto a la URL a la que quieres redirigir al usuario
        //     id:2
        // },
        {
            Id:1,
            original: clancy,
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
            original: nbhd,
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
            original: cuco_tour,
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
        }
    ]

    const navigate = useNavigate();

    const renderImage = (item) => {
        return (( 
            <div onClick={() => navigate('/evento', { state: {card : item}})} style={{cursor:'pointer'}}>
                <img src={item.original} alt="" style={{ width: '90vw', height: 'fit-content', objectFit: 'cover' }} />
            </div>
        ));
    }


    return (
        <div className='Slider'>
            <ImageGallery items={images} 
            renderItem={renderImage}
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