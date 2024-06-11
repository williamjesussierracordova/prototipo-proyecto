import {db} from '../firebase.js'
import { set, ref, onValue } from "firebase/database";

export function writeKeyword(idKeyword,nameKeyword){
    set(ref(db, 'keywords/' + idKeyword), {
        nameKeyword: nameKeyword
    });
}

writeKeyword('1','Pop Rock')