// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDowjMqCBLhz2KqevN3eLsJ3QUBwnNfIoY",
    authDomain: "newdb-1c1e5.firebaseapp.com",
    databaseURL: "https://newdb-1c1e5-default-rtdb.firebaseio.com",
    projectId: "newdb-1c1e5",
    storageBucket: "newdb-1c1e5.firebasestorage.app",
    messagingSenderId: "726689930396",
    appId: "1:726689930396:web:2b2549c91c930968aee159",
    measurementId: "G-HZR6QMYPN4"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

export const logout = async () => {
  await signOut(auth);
};