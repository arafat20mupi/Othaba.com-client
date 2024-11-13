/* eslint-disable react/prop-types */
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import axios from 'axios';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);


    const GoogleProvider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const upDateProfile = (fullName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: photoURL
        })
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };


    const logOut = () => {
        return signOut(auth);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    };
    const facebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, FacebookProvider);
    };
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GithubProvider);
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoading(false);

            if (currentUser) {
                axios.post('https://server-query.vercel.app/jwt', loggedUser, {
                    withCredentials: true
                 })
            }
            else {
                axios.post('https://server-query.vercel.app/logout',loggedUser , {
                    withCredentials: true
                })
                .then(res => {
                    console.log("logout response", res.data);
                } )
            }

        })
        return () => {
            unSubscribe();
        }
    }, [user?.email])

    const authInfo = { user, createUser,reload, signIn, logOut, googleSignIn, facebookSignIn, githubSignIn, resetPassword, loading, upDateProfile, setReload };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;