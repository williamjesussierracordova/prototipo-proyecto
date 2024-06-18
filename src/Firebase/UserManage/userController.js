import {db} from '../firebase.js'
import { set, ref, onValue ,get} from "firebase/database";

export function writeUser(idUser,email, password, phone, name, firstLastName, secondLastName, DNI) {
    set(ref(db, 'users/' + idUser), {
        idUser: idUser,        
        email: email,
        password: password,
        phone: phone,
        name: name,
        firstLastName: firstLastName,
        secondLastName: secondLastName,
        DNI: DNI
    });
}

export async function readUser(idUser) {
    const userRFC = ref(db, 'users/' + idUser);
    try {
        const snapshot = await get(userRFC);
        let data = snapshot.val();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function readUserFromEmail(email) {
    const usersRef = ref(db, 'users/');
    try {
        const snapshot = await get(usersRef);
        const usersData = snapshot.val();
        const user = Object.values(usersData).find(user => user.email === email);
        return user ? user : null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export function updateUserPhone(idUser,phone){
    onValue(ref(db, 'users/' + idUser), (snapshot) => {
        const data = snapshot.val();
        set(ref(db, 'users/' + idUser), {
            idUser: data.idUser,
            email: data.email,
            password: data.password,
            phone: phone,
            name: data.name,
            firstLastName: data.firstLastName,
            secondLastName: data.secondLastName,
            DNI: data.DNI
        });
    });
}

export function updateUserDNI(idUser,DNI){
    onValue(ref(db, 'users/' + idUser), (snapshot) => {
        const data = snapshot.val();
        set(ref(db, 'users/' + idUser), {
            idUser: data.idUser,
            email: data.email,
            password: data.password,
            phone: data.phone,
            name: data.name,
            firstLastName: data.firstLastName,
            secondLastName: data.secondLastName,
            DNI: DNI
        });
    });
}

export function updateUserPassword(idUser,password){
    onValue(ref(db, 'users/' + idUser), (snapshot) => {
        const data = snapshot.val();
        set(ref(db, 'users/' + idUser), {
            email: data.email,
            password: password,
            phone: data.phone,
            name: data.name,
            firstLastName: data.firstLastName,
            secondLastName: data.secondLastName,
            DNI: data.DNI
        });
    });
}


export function deleteUser(idUser) {
    set(ref(db, 'users/' + idUser), null);
}

//  writeUser('william@hotmail.com', '123456','123456789','William','Garcia','Garcia','12345678')
//  writeUser('william@hotmail.com', '123456','123456789','William','Garcia','Garcia','87654321')

 // updateUser('12345678','987655321')

// console.log(await readUser('72074565'))

// updatePassword('12345678','654321')
// deleteUser('12345678')

// readUserFromEmail('williamjsc@hotmail.com')

// console.log(await readUserFromEmail('williamjsc@hotmail.com'))
// console.log(await readUser('72074565'))

// writeUser(1,'prueba@prueba.com','','','prueba','prueba','prueba','00000000')