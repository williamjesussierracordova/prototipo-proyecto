// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,ref,set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD1mDOW7q4McEaqOUa1oSmnRadwzq_G0TM",
  authDomain: "gtn-tickets.firebaseapp.com",
  databaseURL: "https://gtn-tickets-default-rtdb.firebaseio.com",
  projectId: "gtn-tickets",
  storageBucket: "gtn-tickets.appspot.com",
  messagingSenderId: "946002685971",
  appId: "1:946002685971:web:3bfc12f9e82b6ab6bc8fe6",
  measurementId: "G-MCLZHD6LZ3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase();

export function writeUserData(userId, name, email, imageUrl) {
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}
