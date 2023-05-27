import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDrAuQuTQfCw4aQVPRWGiE69RViJNKVDNw",
    authDomain: "proyectoreactjs-957f3.firebaseapp.com",
    projectId: "proyectoreactjs-957f3",
    storageBucket: "proyectoreactjs-957f3.appspot.com",
    messagingSenderId: "202990704849",
    appId: "1:202990704849:web:d6bf0351e3390a3cc90df0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)