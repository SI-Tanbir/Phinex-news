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
    const [checkUser,updateUser]=useState(null)

    



    useEffect(()=>{

        onAuthStateChanged(auth, (observeUser) => {
            console.log('current runing user ',observeUser)
            updateUser(observeUser)
        })

    },[])


  const userSignOut = () => {
    return signOut(auth);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { createRegister, userSignIn, userSignOut,checkUser};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
