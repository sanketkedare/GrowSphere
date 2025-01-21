import { initializeApp } from "firebase/app";

const KEY =  import.meta.env.VITE_FIREBASE_KEY

const firebaseConfig = {
  apiKey: KEY,
  authDomain: "grow-sphere-9ca44.firebaseapp.com",
  projectId: "grow-sphere-9ca44",
  storageBucket: "grow-sphere-9ca44.firebasestorage.app",
  messagingSenderId: "524739914205",
  appId: "1:524739914205:web:d678b1b19953d659a56e34"
};

export const app = initializeApp(firebaseConfig);