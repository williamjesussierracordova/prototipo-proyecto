import { db } from '../firebase.js';
import { readGenre } from '../genresManage/genresManage.js';
import { ref, set ,get } from 'firebase/database';

export async function writeSubGenre(idSubGenre, nameSubGenre, idGenre) {
    const subGeneroRfc = ref(db, 'subGenres/' + idSubGenre);
    if(await readGenre(idGenre)!==null && await readGenre(idGenre)!==undefined){
        console.log('Genre exists')
        set(subGeneroRfc, {
            nameSubGenre: nameSubGenre,
            idGenre: idGenre
        });
    }
    else{
        throw new Error('Invalid genre');
    }
}

export async function readSubGenre(idSubGenre) {
    const subGeneroRfc = ref(db, 'subGenres/' + idSubGenre);
    try {
        const snapshot = await get(subGeneroRfc);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// writeSubGenre(1, 'alternativo', 1);
// writeSubGenre(2, 'progresivo', 1);
// writeSubGenre(3, 'punk', 1);
// writeSubGenre(4, 'metal', 1);
// writeSubGenre(5, 'latino', 2);
// writeSubGenre(6, 'rock', 2);
// writeSubGenre(7, 'country', 2);
// writeSubGenre(8, 'folk', 2);
// writeSubGenre(9, 'K-pop', 2);
// writeSubGenre(10, 'J-pop', 2);
// writeSubGenre(11, 'rock', 3);
// writeSubGenre(12, 'pop', 3);
// writeSubGenre(13, 'indietronica', 3);
// writeSubGenre(14, 'folk', 4);

