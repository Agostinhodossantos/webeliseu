import {db} from "../config/firebase";
import { collection, addDoc, updateDoc, getDoc, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';


export const setUser = async (user) => {
    user.createdAt = new Date();
    const docRef = await setDoc(doc(db, "subscribe_pdf", user.uid), user);
}

export const updatePlayer = async (uid, user) => {
    const playersRef = doc(db, "subscribe_pdf", uid);
    await updateDoc(playersRef, user);
}

export const getUserByUid = async (uid) => {
    const userRef = doc(db, "subscribe_pdf", uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
        return userDoc.data();
    } else {
        return null;
    }
};


export const getALlPlayers = async () => {
    let usersList = [];

    const querySnapshot = await getDocs(collection(db, "subscribe_pdf"));
    querySnapshot.forEach((doc) => {
        usersList.push(doc.data());
    });

    return usersList;
}
