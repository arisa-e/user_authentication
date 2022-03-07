import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
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

useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user)=>{
        setCurrentUser(user)
        setLoading(false)
    })
    return unsubscribe
}, [])

    const value={
        currentUser,
        signup,
        signin,
        logout
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider