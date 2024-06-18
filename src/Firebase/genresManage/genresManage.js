import {db} from '../firebase.js'
import { set, ref, onValue } from "firebase/database";
import {  validateSegment } from '../segmentsManage/segmentsManage.js';

/* deseo jalar un objeto con varios segmentos y generos, para ello debo hacer un join de las tablas genres y segments
y luego hacer un join de la tabla genres con la tabla segments, para ello debo hacer un join de las tablas genres y segments
*/

export async function readGenre(idGenre) {
    return new Promise((resolve, reject) => {
        onValue(ref(db, 'genres/' + idGenre), (snapshot) => {
            const data = snapshot.val();
            resolve(data);
        }, (error) => {
            reject(false);
            console.log(error);
        });
    });
}

export async function writeGenre(idGenre,nameGenre,idSegment){
    try{
        const genreRef = ref(db, 'genres/' + idGenre);
        
        let segment=await validateSegment(idSegment);
        if (segment == false ) { // Cambia la lógica aquí
            throw new Error('Invalid segment');
        }

        set(genreRef, {
            nameGenre: nameGenre,
            segment: idSegment
        });

    }catch(error){
        console.log(error);
    }
}

export async function updateGenre(idGenre,idSegments){
    try{
        const genreRef = ref(db, 'genres/' + idGenre);

        let validSegments=true;
        
        for(let id of idSegments){
            let segment=await validateSegment(id);
            if (segment == false ) { // Cambia la lógica aquí
                console.log('segmento inválido', id);
                validSegments = false; // Marca como inválido y sale del bucle
                break;
            }
        }

        if(!validSegments){
            throw new Error('Invalid segment');
        }
        else{
            set(genreRef, {
                nameGenre: await readGenre(idGenre).then((data)=>data.nameGenre),
                segments: idSegments
            });
        }

    }catch(error){
        console.log(error);
    }

}

export async function deleteGenre(idGenre){
    try{
        const genreRef = ref(db, 'genres/' + idGenre);
        set(genreRef, null);
    }catch(error){
        console.log(error);
    }
}

// writeGenre(1,'rock',1)
// writeGenre(2,'pop',1)
// writeGenre(3,'indie',1)
// writeGenre(4,'metal',1)
// writeGenre(5,'punk',1)
// writeGenre(6,'alternative',1)
// writeGenre(7,'reggae',1)
// writeGenre(8,'hip hop',1)
// writeGenre(9,'electronic',1)
// writeGenre(10,'jazz',1)
// writeGenre(11,'blues',1)
// writeGenre(12,'soul',1)
// writeGenre(13,'funk',1)
// writeGenre(14,'country',1)
// writeGenre(15,'latin',1)
// writeGenre(16,'classical',1)
// writeGenre(17,'folk',1)
// writeGenre(19,'rap',1)

// writeGenre(20,'clasico',4)
// writeGenre(21,'moderno',4)
// writeGenre(22,'vanguardista',4)
// writeGenre(23,'musical',4)
// writeGenre(24,'drama',4)
// writeGenre(25,'comedia',4)
// writeGenre(26,'tragedia',4)
// writeGenre(27,'accion',4)
// writeGenre(28,'aventura',4)
// writeGenre(29,'terror',4)
// writeGenre(30,'ciencia ficcion',4)
// writeGenre(31,'fantasia',4)
// writeGenre(32,'animacion',4)
