import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout(){
        return auth.signOut()
    }

    function changeDisplayName(newName){
        const user = auth.currentUser
        if(user !== null) return user.updateProfile({displayName : newName})
        else return null
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setIsAuthenticating(false)
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        changeDisplayName,
        signup,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{!isAuthenticating && children}</AuthContext.Provider>;
}
