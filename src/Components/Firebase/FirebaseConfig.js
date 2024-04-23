// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoDXLbbCBsnfguND1WATMCbxhPJPy0YJo",
    authDomain: "bydcreation-43d0f.firebaseapp.com",
    projectId: "bydcreation-43d0f",
    storageBucket: "bydcreation-43d0f.appspot.com",
    messagingSenderId: "1086745755448",
    appId: "1:1086745755448:web:18543d18ddcf58bb8f8bcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const user = uid => doc(db, `users/${uid}`);