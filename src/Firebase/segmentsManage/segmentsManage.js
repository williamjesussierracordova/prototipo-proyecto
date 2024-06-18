import {db} from '../firebase.js'
import { set, ref, onValue } from "firebase/database";

export function writeSegment(idSegment,nameSegment){
    set(ref(db, 'segments/' + idSegment), {
        nameSegment: nameSegment
    });
}

export function readSegment(idSegment){
    onValue(ref(db, 'segments/' + idSegment), (snapshot) => {
        const data = snapshot.val();
        // console.log(data);
        return data;
    });
}

// export function validateSegment(idSegment){
//     onValue(ref(db, 'segments/' + idSegment), (snapshot) => {
//         const data =  snapshot.val();
//         if (data == null || data == undefined) {
//             console.log('segmento inválido', idSegment);
//             return false;
//         }
//         else{
//             return true;
//         }
//     });
// }


export function validateSegment(idSegment) {
    return new Promise((resolve, reject) => {
        const segmentRef = ref(db, 'segments/' + idSegment);
        onValue(segmentRef, (snapshot) => {
            const data = snapshot.val();
            if (data === null || data === undefined) {
                resolve(false);
            } else {
                resolve(true);
            }
        }, (error) => {
            reject(error);
        });
    });
}

// console.log(await validateSegment('1'))
// console.log(await validateSegment('2'))
// console.log(await validateSegment('3'))
// console.log(await validateSegment('4'))
// console.log(await validateSegment('5'))
// console.log(await validateSegment('6'))


// writeSegment(1,'Concierto')
// writeSegment(2,'Festival')
// writeSegment(3,'Evento')
// writeSegment(4,'Teatro')
