


import React, { createContext } from 'react'
import auth from './config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

 export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const createRegister=(email,password)=>{

        return createUserWithEmailAndPassword(auth, email, password);
    }

const authInfo= {createRegister}


  return (
    <AuthContext.Provider value={authInfo}>

        {children}
    </AuthContext.Provider>
   
  )
}

export default AuthProvider