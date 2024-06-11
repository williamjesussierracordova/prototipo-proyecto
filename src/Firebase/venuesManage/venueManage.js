import {db} from '../firebase.js'
import { set, ref, onValue } from "firebase/database";

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

writeVenue('1','Estadio Nacional','estadio','12 0733  77 0464','paginagtn','location','Av Jose Diaz Cercado de Lima 15046','Lima','Peru','Lima','15046','d')