import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIl4rpZHLsQEhwFMTCXHIaFy53AhJMSwE",
  authDomain: "gdmvhb.firebaseapp.com",
  projectId: "gdmvhb",
  storageBucket: "gdmvhb.appspot.com",
  messagingSenderId: "165791152908",
  appId: "1:165791152908:web:32a7df057565f681e26729"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);