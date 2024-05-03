import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import pandemonium from '../assets/pandemonium.png';
import './slider.css';

function Slider() {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1920/500/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
            url: 'https://jojimusic.com/' // Cambia esto a la URL a la que quieres redirigir al usuario
        },
        {
            original: 'https://picsum.photos/id/1015/1920/500/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
            url: 'https://jojimusic.com/' // Cambia esto a la URL a la que quieres redirigir al usuario
        },
        {
            original: 'https://picsum.photos/id/1019/1920/500/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            url: 'https://jojimusic.com/' // Cambia esto a la URL a la que quieres redirigir al usuario
        },
        {
            original: pandemonium,
            thumbnail: pandemonium,
            url: 'https://jojimusic.com/' // Cambia esto a la URL a la que quieres redirigir al usuario
        },
    ]

    const renderImage = (item) => {
        return (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img src={item.original} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            useTranslate3D={true}
            />

        </div>
    );
}

export default Slider;