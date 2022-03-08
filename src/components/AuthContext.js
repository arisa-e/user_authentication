import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateEmail,
    updatePassword
} from "firebase/auth"
import React from 'react'

const AuthContext=React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signin (email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return auth.signOut()
    }
    function reset(email){
        return sendPasswordResetEmail(auth, email)
    }
    function updatedEmail(email){
        return updateEmail(auth.currentUser, email)
    }
    function updatedPassword(password){
        return updatePassword(auth.currentUser, password)
    }

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        setCurrentUser(user)
        setLoading(false)
    })
    return unsubscribe
}, [])

    const value={
        currentUser,
        signup,
        signin,
        logout,
        reset,
        updatedEmail,
        updatedPassword
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider