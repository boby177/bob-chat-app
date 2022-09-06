// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC51HbY39H3hMChoFeSD_SCPfsvy-ePhh8",
  authDomain: "bob-chat-app-8e3b2.firebaseapp.com",
  projectId: "bob-chat-app-8e3b2",
  storageBucket: "bob-chat-app-8e3b2.appspot.com",
  messagingSenderId: "740496378528",
  appId: "1:740496378528:web:9cb2bbcbba79c867b4d7c5",
  measurementId: "G-Y1TZSR1LN7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();