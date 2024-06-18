import {db} from '../firebase.js'
import { set, ref, get } from "firebase/database";

export function writeImage(idImage,urlImage,heightImage,widthImage,fallbackImage,typeImage){
    set(ref(db, 'images/' + idImage ), {
        urlImage: urlImage,
        heightImage: heightImage,
        widthImage: widthImage,
        fallbackImage: fallbackImage,
        typeImage: typeImage
    });
}

export async function readImage(idImage){
    const imageRFC = ref(db, 'images/' + idImage);
    try {
        const snapshot = await get(imageRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }
}



// writeImage(1,'C:\\Users\\willi\\Desktop\\react\\prototipo-proyecto\\src\\assets\\clancy_tour.jpg',600,1600,'clancy tour','slider')
// writeImage(2,'C:\\Users\\willi\\Desktop\\react\\prototipo-proyecto\\src\\assets\\top_pasarela.jpg',1080,1920,'top pasarela','pasarela')
// writeImage(3,'C:\\Users\\willi\\Desktop\\react\\prototipo-proyecto\\src\\assets\\top_pasarela.jpg',1080,1920,'top mobile','mobile')
// writeImage(4,'C:\\Users\\willi\\Desktop\\react\\prototipo-proyecto\\src\\assets\\cuco_slider.jpg',600,1600,'cuco slider','slider')
// writeImage(5,'C:\\Users\\willi\\Desktop\\react\\prototipo-proyecto\\src\\assets\\cuco_pasarela.jpg',1080,1920,'cuco pasarela','pasarela')
// writeImage(6,'C:\\Users\\willi\\Desktop\\react\\prototipo-proyecto\\src\\assets\\cuco_mobile.jpg',450,675,'cuco mobile','mobile')
// writeImage(7,'C:\\Users\\willi\\Desktop\\react\\prototipo-proyecto\\src\\assets\\nbhd_slider.jpg',600,1600,'nbhd slider','slider')
// writeImage(8,'C:\\Users\\willi\\Desktop\\react\\prototipo-proyecto\\src\\assets\\nbhd_pasarela.jpg',1080,1920,'nbhd pasarela','pasarela')
// writeImage(9,'C:\\Users\\willi\\Desktop\\react\\prototipo-proyecto\\src\\assets\\nbhd_mobile.webp',800,800,'nbhd mobile','mobile')