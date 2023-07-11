import { useContext, createContext, useEffect, useState } from 'react';
import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
          const response = await signInWithPopup(auth, provider);
          // await signInWithRedirect(auth, provider);
        return response;
    };

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

    }

    const authWithEmail = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    const loginWithEmail = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const passwordResetEmail = async (email) => {
        await sendPasswordResetEmail(auth, email);
    };

    const logOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            console.log('User', currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{
                googleSignIn,
                authWithEmail,
                loginWithEmail,
                passwordResetEmail,
                logOut,
                user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
