import {db} from '../firebase.js'
import { set, ref, get } from "firebase/database";

export function writeArea(idArea,typeArea, nameArea, capacityArea){
    set(ref(db, 'areas/' + idArea), {
        typeArea: typeArea,
        nameArea: nameArea,
        capacityArea: capacityArea
    });
}

export async function readArea(idArea){
    const areaRFC = ref(db, 'areas/' + idArea);
    try {
        const snapshot = await get(areaRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteArea(idArea){
    const areaRFC = ref(db, 'areas/' + idArea);
    try {
        const area = await readArea(idArea);
        if(area === null){
            return false;
        }
        else{
            await set(areaRFC, null);
            return true;
        }
        
    } catch (error) {
        console.error(error);
        return false;
    }
}


writeArea(1,'regular','Platea Preferencial',96)
writeArea(2,'regular','Platea Baja',384)
writeArea(3,'solo silla de ruedas','Platea Baja',4)
writeArea(4,'regular','Platea Alta',233)
writeArea(5,'solo silla de ruedas','Platea Alta',4)
writeArea(6,'regular','Platea Lateral Der/Izq',54)
writeArea(7,'regular','Palco Lateral Der/Izq',8)
writeArea(8,'regular','Piso 2',168)
writeArea(9,'solo silla de ruedas','Piso 2',2)
writeArea(10,'regular','Piso 2 Lateral Der/Izq',42)
writeArea(11,'solo silla de ruedas','Piso 2 Lateral',2)
writeArea(12,'regular','Piso 2 Palco Der/Izq',8)
writeArea(13,'regular','Piso 3',154)
writeArea(14,'regular','Piso 3 Lateral Der/Izq',44)
writeArea(15,'regular','Piso 3 Palco 1 Der/Izq',8)
writeArea(16,'regular','Piso 3 Palco 2 Der/Izq',8)
writeArea(17,'regular','Piso 4 Central',118)
writeArea(18,'regular','Piso 4 Der/Izq',60)
writeArea(19,'regular','Piso 4 Lateral Der/Izq',20)