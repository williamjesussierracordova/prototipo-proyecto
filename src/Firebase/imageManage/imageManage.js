import {db} from '../firebase.js'
import { set, ref, onValue } from "firebase/database";

export function writeManage(idImage,urlImage,heightImage,widthImage,fallbackImage){
    set(ref(db, 'images/' + idImage ), {
        urlImage: urlImage,
        heightImage: heightImage,
        widthImage: widthImage,
        fallbackImage: fallbackImage
    });
}

writeManage('1','https://firebasestorage.googleapis.com/v0/b/ticketmaster-clone.appspot.com/o/1.jpg?alt=media&token=4b0b5c4b-7e0b-4c2d-8e4a-7d2e9a0e0e6e','100','100','tyler tocando el piano')