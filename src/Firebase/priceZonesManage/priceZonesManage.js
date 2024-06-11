import {db} from '../firebase.js'
import { set, ref, onValue } from "firebase/database";

export function writepriceZone(priceZoneId, typePriceZone){
    set(ref(db, 'priceZones/' + priceZoneId), {
        typePriceZone: typePriceZone /* normal o conadis */
    });
}
