import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD67K5Y3pFfD6dT3jj0KIiDrrUn_bmAumg",
  authDomain: "stuff-tracker-cw.firebaseapp.com",
  projectId: "stuff-tracker-cw",
  storageBucket: "stuff-tracker-cw.appspot.com",
  messagingSenderId: "870588505367",
  appId: "1:870588505367:web:71061b083f95ce54d52b52",
  measurementId: "G-3S95R1DTW1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();