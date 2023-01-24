/* eslint-disable */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAGhDbUX2tkyjo-nHULOzBgg48Jq7H5nTQ",
  authDomain: "medics-media.firebaseapp.com",
  projectId: "medics-media",
  storageBucket: "medics-media.appspot.com",
  messagingSenderId: "938738973743",
  appId: "1:938738973743:web:8e3cd4351addf202859ada",
  measurementId: "G-M3MD1EC3HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app)