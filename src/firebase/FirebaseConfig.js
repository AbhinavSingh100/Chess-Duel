import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBI4021PBWh8NQFObprCrEybQf3R5bTQiQ",
    authDomain: "chess-duel.firebaseapp.com",
    projectId: "chess-duel",
    storageBucket: "chess-duel.firebasestorage.app",
    messagingSenderId: "270525238908",
    appId: "1:270525238908:web:07bc1386568ade05ca43f9",
    measurementId: "G-158GKFXFL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, ref, set, onValue, auth, provider, signInWithPopup };
