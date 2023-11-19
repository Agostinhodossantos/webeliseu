// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage} from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAa_8lbw7dxz9KDXOeHjZHLJ7oooFpJ1N0",
    authDomain: "cursos-7115e.firebaseapp.com",
    projectId: "cursos-7115e",
    storageBucket: "cursos-7115e.appspot.com",
    messagingSenderId: "117711318688",
    appId: "1:117711318688:web:8fdabf1f45a7567c5ea3c5",
    measurementId: "G-9MJJ69DBFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

