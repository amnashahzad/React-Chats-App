import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmi8CXXR7PIbYQuodZ14ivpq5t71pqU5c",
  authDomain: "react-chat-app-2e641.firebaseapp.com",
  projectId: "react-chat-app-2e641",
  storageBucket: "react-chat-app-2e641.appspot.com",
  messagingSenderId: "683264737551",
  appId: "1:683264737551:web:d332c80f3d34414705be7a",
  measurementId: "G-6QLR2RNZEZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
