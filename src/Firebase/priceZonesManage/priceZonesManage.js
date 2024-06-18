import {db} from '../firebase.js'
import { set, ref, get } from "firebase/database";

export function writepriceZone(priceZoneId, typePriceZone){
    set(ref(db, 'priceZones/' + priceZoneId), {
        typePriceZone: typePriceZone /* normal o conadis */
    });
}

export async function readPriceZone(priceZoneId){
    const priceZoneRFC = ref(db, 'priceZones/' + priceZoneId);
    try {
        const snapshot = await get(priceZoneRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// writepriceZone(2,'Conadis')
// console.log(await readPriceZone(2))