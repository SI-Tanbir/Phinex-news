import React, { createContext, useEffect, useState } from "react";
import auth from "./config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [loading,setLoading]=useState(true)
    
    const [checkUser,updateUser]=useState(null)

    



    useEffect(()=>{

        const unsubscribe= onAuthStateChanged(auth, (observeUser) => {

          console.log('current runing user ',observeUser)
          updateUser(observeUser)
          setLoading(false)
  
          

        })
        return ()=>unsubscribe();


    },[])


  const userSignOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const userSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createRegister = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);

  };

  const authInfo = { loading,createRegister, userSignIn, userSignOut,checkUser};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
