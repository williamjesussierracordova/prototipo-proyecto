import { readArea } from "../areasManage/areasManage.js";
import { db } from "../firebase.js";
import { get, set, ref } from "firebase/database";
import { readPriceZone } from "../priceZonesManage/priceZonesManage.js";
import { readEvent } from "../eventManage/eventManage.js";

export async function writeOffer(idOffer, idArea, descriptionOffer, priceOffer, currencyOffer, idPriceZone, idEvent){
    const offerRFC = ref(db, 'offers/' + idOffer);
    try{
        let areaData = await readArea(idArea);
        if(areaData==null){
            throw new Error('Invalid area', idArea);
        }

        let priceZoneData = await readPriceZone(idPriceZone);
        if(priceZoneData==null){
            throw new Error('Invalid price zone', idPriceZone);
        }

        let eventData = await readEvent(idEvent);
        if(eventData==null){
            throw new Error('Invalid event', idEvent);
        }

        set(offerRFC, {
            idArea: idArea,
            descriptionOffer: descriptionOffer,
            priceOffer: priceOffer,
            currencyOffer: currencyOffer,
            idPriceZone: idPriceZone,
            idEvent: idEvent
        });

    }
    catch(error){
        console.error(error);
    }
}

export async function readOffer(idOffer){
    const offerRFC = ref(db, 'offers/' + idOffer);
    try {
        const snapshot = await get(offerRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// writeOffer(1,1,'visibilidad media', 100, 'PEN', 2, 1)
// console.log(await readOffer(1).then((data)=>{return data.idArea}))