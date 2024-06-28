import { db } from "../firebase.js";
import { ref, set, get } from "firebase/database";
import { readKeywords } from "../keywordManage/keywordsManage.js";
import { readSubGenre } from "../subGenresManage/subGenreManage.js";

export async function writeAtraction(idAttraction, nameAttraction, urlAttraction, clasificationAttraction,idKeywords){
    const attractionRFC = ref(db, 'attractions/' + idAttraction);
    try {
        for(let keyword of idKeywords){
            let keywordData = await readKeywords(keyword);
            if(keywordData==null){
                console.log('Keyword no encontrada',keyword)
                throw new Error('Keyword not found');
            }
        }

        let clasificationData = await readSubGenre(clasificationAttraction);
        if(clasificationData==null){
            console.log('Clasification no encontrada',clasificationAttraction)
            throw new Error('Invalid clasification');
        }

        set(attractionRFC, {
            nameAttraction: nameAttraction,
            urlAttraction: urlAttraction,
            clasificationAttraction: clasificationAttraction,
            idKeywords: idKeywords
        });
    }
    catch(error){
        console.error('Error writing document: ', error);
    }
}

export async function readAtraction(idAttraction){
    const attractionRFC = ref(db, 'attractions/' + idAttraction);
    try {
        const snapshot = await get(attractionRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// writeAtraction(1,'The Clancy Tour','http://localhost:5173/eventos/1',1,[1,2,3,8])
//writeAtraction(3,'The NBHD Tour','http://localhost:5173/eventos/2',1,[1,2,3,6,20,100])
// writeAtraction(2,'Cuco Tour','http://localhost:5173/eventos/3',12,[19,8,33])