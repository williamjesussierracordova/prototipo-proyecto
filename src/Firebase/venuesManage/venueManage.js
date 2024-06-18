import {db} from '../firebase.js'
import { set, ref, get } from "firebase/database";

export function writeVenue(idVenue,nameVenue,typeVenue,locateVenue,urlVenue,locationVenue,addressVenue,cityVenue,countryVenue,stateVenue,postalCodeVenue,timeZoneVenue){
    set(ref(db, 'venues/' + idVenue), {
        nameVenue: nameVenue,
        typeVenue: typeVenue,
        locateVenue: locateVenue,
        urlVenue: urlVenue,
        locationVenue: locationVenue,
        addressVenue: addressVenue,
        cityVenue: cityVenue,
        countryVenue: countryVenue,
        stateVenue: stateVenue,
        postalCodeVenue: postalCodeVenue,
        timeZoneVenue: timeZoneVenue
    });
}

export async function readVenue(idVenue){
    const venueRFC = ref(db, 'venues/' + idVenue);
    try {
        const snapshot = await get(venueRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }

}

// writeVenue('1','Estadio Nacional','estadio','12 0733  77 0464','paginagtn','location','Av Jose Diaz Cercado de Lima 15046','Lima','Peru','Lima','15046','d')
// console.log(await readVenue('1'))

writeVenue(1,'Gran teatro nacional','Teatro','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31210.967839248136!2d-77.003096!3d-12.086736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d374af6eef%3A0xdd62873e6d53e56b!2sGran%20Teatro%20Nacional%20del%20Per%C3%BA!5e0!3m2!1sen!2sus!4v1714581177503!5m2!1sen!2sus','https://www.granteatronacional.pe/','La estación de transporte público más próxima (La Cultura del Metro de Lima) está a menos de 100 metros.','Av. Javier Prado Este 2225, San Borja. Lima - Perú.','Lima','Perú','Lima','15021','UTC-5')