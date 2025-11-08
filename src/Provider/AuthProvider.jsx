import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

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

  // Login/Register with Google
  const loginwithGoogle = ()=>{
    return signInWithPopup(auth, provider);
  }
  // Update Profile
  const updateUserProfile = (displayName, photoURL)=>{
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL
    })
  }

  // passed down value object
  const value = {
    createUser,
    loginUser,
    logOut,
    resetPass,
    loginwithGoogle,
    updateUserProfile,
    user,
    setUser,
    loading,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
