import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // current status of the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>unsubscribe();
  }, []);

  // logout
  const logOut= ()=>{
    return signOut(auth)
  }

  // reset password
  const resetPass = (email)=>{
    return sendPasswordResetEmail(auth, email);
  }
  // passed down value object
  const value = {
    createUser,
    loginUser,
    logOut,
    resetPass,
    user,
    loading,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
