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
            idEvent: idEvent,
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

export async function readEvents(){
    const eventsRFC = ref(db, 'events/');
    try {
        const snapshot = await get(eventsRFC);
        let data = snapshot.val();
        if(data==null){
            throw new Error('Events not found');
        }
        else{
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}

// writeEvent(1,'1','2025-02-02',199.90,'1',
//     'Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17. Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.'
//     ,'1',['1','2','3'],'1','Twenty One Pilots en Lima',true)
// console.log(await readEvent('1'))
// writeEvent(2,'2','2025-12-10',139.90,'2',
//     'Cuco is a Mexican-American singer-songwriter from Los Angeles. He first gained mainstream attention in 2016 with his single "Lo Que Siento", which garnered over 50 million streams on Spotify. Cuco released his debut album, Para Mi, in 2019.'
//     ,2,['4','5','6'],'1','Cuco en Lima',true)

// console.log(await readEvents())

