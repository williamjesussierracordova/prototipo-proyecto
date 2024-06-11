import {db} from '../firebase.js'
import { set, ref, onValue } from "firebase/database";

export function writeSegment(idSegment,nameSegment){
    set(ref(db, 'segments/' + idSegment), {
        nameSegment: nameSegment
    });
}

writeSegment('1','Concierto')