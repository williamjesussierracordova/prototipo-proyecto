import {db} from '../firebase.js'
import { set, ref, onValue } from "firebase/database";

export function writePromoter(idPromoter,namePromoter,countryPromoter){
    set(ref(db, 'promoters/' + idPromoter), {
        namePromoter: namePromoter,
        countryPromoter: countryPromoter
    });
}

writePromoter('1','Sony music','Peru')