import { readAtraction } from '../atractionsManage/atractionsManage.js';
import { db } from '../firebase.js';
import { ref, set ,get } from 'firebase/database';
import { readPromoter } from '../promotersManage/promotersManage.js';
import { readImage } from '../imageManage/imageManage.js';
import { readVenue } from '../venuesManage/venueManage.js';

export async function writeEvent(idEvent,dateEvent,priceMinEvent,idAttraction,noteEvent,idPromoter,idImages,idVenue,infoEvent,isAvailableEvent){
    const eventRFC = ref(db, 'events/' + idEvent);
    try{
        let attractionData = await readAtraction(idAttraction);
        if(attractionData==null){
            console.log('Atraction no encontrada',idAttraction)
            throw new Error('Atraction not found');
        }

        let promoterData = await readPromoter(idPromoter);
        if(promoterData==null){
            console.log('Promoter no encontrada',idPromoter)
            throw new Error('Promoter not found');
        }

        for(let image of idImages){
            let imageData = await readImage(image);
            if(imageData==null){
                console.log('Image no encontrada',image)
                throw new Error('Image not found');
            }
        }

        let venueData = await readVenue(idVenue);
        if(venueData==null){
            console.log('Venue no encontrada',idVenue)
            throw new Error('Venue not found');
        }

        set(eventRFC, {
            dateEvent: dateEvent,
            priceMinEvent: priceMinEvent,
            noteEvent: noteEvent,
            idAttraction: idAttraction,
            idPromoter: idPromoter,
            idImages: idImages,
            idVenue: idVenue,
            infoEvent: infoEvent,
            isAvailableEvent: isAvailableEvent
        });
    }
    catch(error){
        console.error('Error writing document: ', error);
    }
}

export async function readEvent(idEvent){
    const eventRFC = ref(db, 'events/' + idEvent);
    try {
        const snapshot = await get(eventRFC);
        let data = snapshot.val();
        if(data==null){
            console.log('Event not found',idEvent)
            throw new Error('Event not found');
        }
        else{
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}


// writeEvent('1','2022-10-10',199.90,'1','Evento de rock','1',['1','2'],'1','Evento de rock',true)
// console.log(await readEvent('2'))