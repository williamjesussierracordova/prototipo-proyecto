import { readUser } from "../UserManage/userController.js";
import { db } from "../firebase.js";
import { set, ref, get } from "firebase/database";


export async function writeSale(idSale, idUser, metodoPago, totalSale, estadoSale){
    const saleRFC = ref(db, 'sales/' + idSale);

    try{
        let userData = await readUser(idUser);
        if(userData == null){
            throw new Error('Invalid user', idUser);
        }

        set(saleRFC, {
            idSale: idSale,
            idUser: idUser,
            metodoPago: metodoPago,
            totalSale: totalSale,
            estadoSale: estadoSale
        });
    }
    catch(error){
        console.error(error);
    }
}

export async function readSale(idSale){
    const saleRFC = ref(db, 'sales/' + idSale);
    try {
        const snapshot = await get(saleRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function readSaleUser(idUser){
    const saleRFC = ref(db, 'sales/');
    try {
        const snapshot = await get(saleRFC);
        let data = snapshot.val();
        let sales = [];
        for (const key in data) {
            if (data[key].idUser == idUser) {
                sales.push(data[key]);
            }
        }
        return sales;
    } catch (error) {
        console.error(error);
    }
}



writeSale(1,'46531368','Visa',1025.90,'Completado')
// console.log(await readSale(1))
