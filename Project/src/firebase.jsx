// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getDatabase, ref, onValue, push, update  } from "firebase/database"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBI_GNY4E0BimGsPJ6No9OJrh4m_hInKAY",
  authDomain: "web-crypto-e02ab.firebaseapp.com",
  databaseURL: "https://web-crypto-e02ab-default-rtdb.firebaseio.com",
  projectId: "web-crypto-e02ab",
  storageBucket: "web-crypto-e02ab.firebasestorage.app",
  messagingSenderId: "731272340830",
  appId: "1:731272340830:web:0bab92c04c36b648b45bcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {auth, db, ref, onValue, push, update, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut}