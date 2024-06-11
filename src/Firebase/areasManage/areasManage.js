import {db} from '../firebase.js'
import { set, ref, onValue } from "firebase/database";

export function writeArea(typeArea, nameArea, capacityArea){
    set(ref(db, 'areas/' + nameArea), {
        typeArea: typeArea,
        nameArea: nameArea,
        capacityArea: capacityArea
    });
}

writeArea('normal', 'Platea baja', 1000)