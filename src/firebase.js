/* eslint-disable */

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfK3atIEYqwiZpGHUlyoBgV5YJvhDmKzc",
  authDomain: "oja-online-885b5.firebaseapp.com",
  projectId: "oja-online-885b5",
  storageBucket: "oja-online-885b5.appspot.com",
  messagingSenderId: "147590734015",
  appId: "1:147590734015:web:92272fd608a9b4cb68a60a",
  measurementId: "G-J3040K6T9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);