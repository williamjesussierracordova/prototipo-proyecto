import {db} from '../firebase.js'
import { set, ref, onValue } from "firebase/database";

export function writeUser(email, password, phone, name, firstLastName, secondLastName, DNI) {
    set(ref(db, 'users/' + DNI), {
        email: email,
        password: password,
        phone: phone,
        name: name,
        firstLastName: firstLastName,
        secondLastName: secondLastName,
        DNI: DNI
    });
}

export function readUser(DNI) {
    onValue(ref(db, 'users/' + DNI), (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        return data;
    });
}

export function updateUserPhone(DNI,phone){
    onValue(ref(db, 'users/' + DNI), (snapshot) => {
        const data = snapshot.val();
        set(ref(db, 'users/' + DNI), {
            email: data.email,
            password: data.password,
            phone: phone,
            name: data.name,
            firstLastName: data.firstLastName,
            secondLastName: data.secondLastName,
            DNI: DNI
        });
    });
}

export function updateUserPassword(DNI,password){
    onValue(ref(db, 'users/' + DNI), (snapshot) => {
        const data = snapshot.val();
        set(ref(db, 'users/' + DNI), {
            email: data.email,
            password: password,
            phone: data.phone,
            name: data.name,
            firstLastName: data.firstLastName,
            secondLastName: data.secondLastName,
            DNI: DNI
        });
    });
}

export function deleteUser(DNI) {
    set(ref(db, 'users/' + DNI), null);
}

//  writeUser('william@hotmail.com', '123456','123456789','William','Garcia','Garcia','12345678')
//  writeUser('william@hotmail.com', '123456','123456789','William','Garcia','Garcia','87654321')

 // updateUser('12345678','987655321')

// readUser('12345678')

// updatePassword('12345678','654321')
// deleteUser('12345678')