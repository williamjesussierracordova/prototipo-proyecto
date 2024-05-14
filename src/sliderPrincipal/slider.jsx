import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import pandemonium from '../assets/pandemonium.png';
import './slider.css';
import clancy from '../assets/clancy_tour.jpg';
import nbhd from '../assets/nbhd.jpg';
import cuco_tour from '../assets/cuco_tour.jpg';

function Slider() {
    const images = [
        {
            original: clancy,
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
            url: '/espectaculos' // Cambia esto a la URL a la que quieres redirigir al usuario
        },
        {
            original: pandemonium,
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
            url: 'https://jojimusic.com/' // Cambia esto a la URL a la que quieres redirigir al usuario
        },
        {
            original: nbhd,
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            url: 'https://jojimusic.com/' // Cambia esto a la URL a la que quieres redirigir al usuario
        },
        {
            original: 'https://picsum.photos/id/1020/1920/650/',
            thumbnail: 'https://picsum.photos/id/1020/250/150/',
            url: 'https://jojimusic.com/' // Cambia esto a la URL a la que quieres redirigir al usuario
        },
        {
            original: cuco_tour,
            thumbnail: 'https://picsum.photos/id/1020/250/150/',
            url: 'https://jojimusic.com/' // Cambia esto a la URL a la que quieres redirigir al usuario
        },
    ]

    const renderImage = (item) => {
        return (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img src={item.original} alt="" style={{ width: '90vw', height: 'fit-content', objectFit: 'cover' }} />
            </a>
        );
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