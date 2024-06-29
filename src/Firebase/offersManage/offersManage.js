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
            idOffer: idOffer,
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

export async function readOfferDescription(description){
    const offersRFC = ref(db, 'offers');
    try {
        const snapshot = await get(offersRFC);
        let data = snapshot.val();
        let offers = Object.values(data);
        let offer = offers.find(offer => offer.descriptionOffer == description);
        return offer;
    } catch (error) {
        console.error(error);
    }
}



// writeOffer(1,1,'visibilidad media', 100, 'PEN', 2, 1)
// console.log(await readOffer(1).then((data)=>{return data.idArea}))

// writeOffer(1,1,'Platea Preferencial',389.00,'PEN',1,1)
// writeOffer(2,1,'Platea Preferencial',288.80,'PEN',2,1)
// writeOffer(3,2,'Platea Baja',319.00,'PEN',1,1)
// writeOffer(4,2,'Platea Baja',254.40,'PEN',2,1)
// writeOffer(5,3,'Platea Baja solo silla de ruedas',263.00,'PEN',1,1)
// writeOffer(6,3,'Platea Baja solo silla de ruedas',210.40,'PEN',2,1)
// writeOffer(7,4,'Platea Alta',296.00,'PEN',1,1)
// writeOffer(8,4,'Platea Alta',236.80,'PEN',2,1)
// writeOffer(9,5,'Platea Alta solo silla de ruedas',245.00,'PEN',1,1)
// writeOffer(10,5,'Platea Alta solo silla de ruedas',196.00,'PEN',2,1)
// writeOffer(11,6,'Platea Lateral Der/Izq',274.00,'PEN',1,1)
// writeOffer(12,6,'Platea Lateral Der/Izq',219.20,'PEN',2,1)
// writeOffer(13,7,'Palco Platea Der/Izq',274.00,'PEN',1,1)
// writeOffer(14,7,'Palco Platea Der/Izq',219.20,'PEN',2,1)
// writeOffer(15,8,'Piso 2',242.00,'PEN',1,1)
// writeOffer(16,8,'Piso 2',193.60,'PEN',2,1)
// writeOffer(17,9,'Piso 2 solo silla de ruedas',193.00,'PEN',1,1)
// writeOffer(18,9,'Piso 2 solo silla de ruedas',154.40,'PEN',2,1)
// writeOffer(19,10,'Piso 2 Lateral Der/Izq',197.60,'PEN',1,1)
// writeOffer(20,10,'Piso 2 Lateral Der/Izq',158.80,'PEN',2,1)
// writeOffer(21,11,'Piso 2 Lateral solo silla de ruedas',158.00,'PEN',1,1)
// writeOffer(22,11,'Piso 2 Lateral solo silla de ruedas',126.40,'PEN',2,1)
// writeOffer(23,12,'Piso 2 Palco Der/Izq',48.00,'PEN',1,1)
// writeOffer(24,12,'Piso 2 Palco Der/Izq',48.00,'PEN',2,1)
// writeOffer(25,13,'Piso 3',153.60,'PEN',1,1)
// writeOffer(26,13,'Piso 3',122.80,'PEN',2,1)
// writeOffer(27,14,'Piso 3 Lateral Der/Izq',48.00,'PEN',1,1)
// writeOffer(28,14,'Piso 3 Lateral Der/Izq',48.00,'PEN',2,1)
// writeOffer(29,15,'Piso 3 Palco 1 Der/Izq',48.00,'PEN',1,1)
// writeOffer(30,15,'Piso 3 Palco 1 Der/Izq',48.00,'PEN',2,1)
// writeOffer(31,16,'Piso 3 Palco 2 Der/Izq',110.00,'PEN',1,1)
// writeOffer(32,16,'Piso 3 Palco 2 Der/Izq',88.00,'PEN',2,1)
// writeOffer(33,17,'Piso 4 Central',99.00,'PEN',1,1)
// writeOffer(34,17,'Piso 4 Central',79.20,'PEN',2,1)
// writeOffer(35,18,'Piso 4 Der/Izq',48.00,'PEN',1,1)
// writeOffer(36,18,'Piso 4 Der/Izq',48.00,'PEN',2,1)
// writeOffer(37,19,'Piso 4 Lateral Der/Izq',48.00,'PEN',1,1)
// writeOffer(38,19,'Piso 4 Lateral Der/Izq',48.00,'PEN',2,1)