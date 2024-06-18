import {db} from '../firebase.js'
import { get,set, ref, onValue } from "firebase/database";

export function writeKeyword(idKeyword,nameKeyword){
    set(ref(db, 'keywords/' + idKeyword), {
        nameKeyword: nameKeyword
    });
}

export async function readKeywords(idKeyword){
    const keywordRFC = ref(db, 'keywords/' + idKeyword);
    try {
        const snapshot = await get(keywordRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// writeKeyword(1,'rock')
// writeKeyword(2,'pop')
// writeKeyword(3,'indie')
// writeKeyword(4,'metal')
// writeKeyword(5,'punk')
// writeKeyword(6,'alternative')
// writeKeyword(7,'reggae')
// writeKeyword(8,'hip hop')
// writeKeyword(9,'electronic')
// writeKeyword(10,'jazz')
// writeKeyword(11,'blues')
// writeKeyword(12,'soul')
// writeKeyword(13,'funk')
// writeKeyword(14,'country')
// writeKeyword(15,'latin')
// writeKeyword(16,'classical')
// writeKeyword(17,'folk')
// writeKeyword(18,'experimental')
// writeKeyword(19,'rap')
// writeKeyword(20,'r&b')
// writeKeyword(21,'dance')
// writeKeyword(22,'world')
// writeKeyword(23,'ambient')
// writeKeyword(24,'reggaeton')
// writeKeyword(25,'trap')
// writeKeyword(26,'ska')
// writeKeyword(27,'house')
// writeKeyword(28,'techno')
// writeKeyword(29,'dubstep')
// writeKeyword(30,'hardstyle')
// writeKeyword(31,'drum and bass')
// writeKeyword(32,'trance')
// writeKeyword(33,'chillout')
// writeKeyword(34,'downtempo')
// writeKeyword(35,'disco')
// writeKeyword(36,'grunge')
// writeKeyword(37,'emo')
// writeKeyword(38,'post punk')
// writeKeyword(39,'shoegaze')
// writeKeyword(40,'post rock')
// writeKeyword(41,'noise')

