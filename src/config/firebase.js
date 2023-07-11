// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage} from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCQ1COMR2nDkFUzsEYANTZrz1g7j0Uwq0o",
    authDomain: "eliseu-game.firebaseapp.com",
    projectId: "eliseu-game",
    storageBucket: "eliseu-game.appspot.com",
    messagingSenderId: "206518276586",
    appId: "1:206518276586:web:d3d491d9dc0e63efc72293",
    measurementId: "G-B6E7R5ZSKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

