import {db} from '../firebase.js'
import { set, ref, onValue, onChildAdded } from "firebase/database";

/* deseo jalar un objeto con varios segmentos y generos, para ello debo hacer un join de las tablas genres y segments
y luego hacer un join de la tabla genres con la tabla segments, para ello debo hacer un join de las tablas genres y segments
*/

export function readGenre(idGenre){
    onValue(ref(db, 'genres/' + idGenre), (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        return data;
    });
}

export function writeGenre(idGenre,nameGenre,idSegment,){
    const segmentRef = ref(db, 'genres/' + idGenre + '/segments/' + idSegment);
    const genreRef = ref(db, 'genres/' + idGenre);

    

    set(genreRef, {
        nameGenre: nameGenre,
    });

    set(segmentRef, {
        nameSegment: nameGenre
    });

    
}

writeGenre('1','Rock','1')