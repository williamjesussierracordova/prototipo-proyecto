import {db} from '../firebase.js'
import { set, ref, get } from "firebase/database";

export function writePromoter(idPromoter,namePromoter,countryPromoter){
    set(ref(db, 'promoters/' + idPromoter), {
        namePromoter: namePromoter,
        countryPromoter: countryPromoter
    });
}

export async function readPromoter(idPromoter){
    const promoterRFC = ref(db, 'promoters/' + idPromoter);
    try {
        const snapshot = await get(promoterRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }

}

// writePromoter(1,'Sony music','Peru')
// writePromoter(2,'Universal music','Peru')
// writePromoter(3,'Warner music','Peru')
// writePromoter(4,'Live Nation','Peru')
// writePromoter(5,'Move Concerts','Peru')
// writePromoter(6,'Master Lives','Peru')
// writePromoter(7,'Veltrac Music','Peru')
