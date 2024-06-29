import { db } from "../firebase.js";
import { set, ref, get } from "firebase/database";
import { readSale } from "../salesManage/salesManage.js";
import { readUser } from "../UserManage/userController.js";
import { readOffer } from "../offersManage/offersManage.js";

export async function writeTicket(idTicket, idSale, idUser, idOffer){
    const ticketRFC = ref(db, 'tickets/' + idTicket);
    try{
        let saleData = await readSale(idSale);
        if(saleData == null){
            throw new Error('Invalid sale', idSale);
        }

        let userData = await readUser(idUser);
        if(userData == null){
            throw new Error('Invalid user', idUser);
        }

        let offerData = await readOffer(idOffer);
        if(offerData == null){
            throw new Error('Invalid offer', idOffer);
        }

        set(ticketRFC, {
            idSale: idSale,
            idUser: idUser,
            idOffer: idOffer
        });
    }
    catch(error){
        console.error(error);
    }
}

export async function readTicket(idTicket){
    const ticketRFC = ref(db, 'tickets/' + idTicket);
    try {
        const snapshot = await get(ticketRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function readTicketSale(idSale){
    const ticketRFC = ref(db, 'tickets/');
    try {
        const snapshot = await get(ticketRFC);
        let data = snapshot.val();
        let tickets = [];
        for (const key in data) {
            if (data[key].idSale == idSale) {
                tickets.push(data[key]);
            }
        }
        return tickets;
    } catch (error) {
        console.error(error);
    }
}

writeTicket(1,1,'72074565',1)