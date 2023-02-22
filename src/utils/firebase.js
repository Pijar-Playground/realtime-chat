// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZOpQM383HYfW5G9_vrz8GlvXfDAZmWJQ",
  authDomain: "realtime-chat-d0c11.firebaseapp.com",
  projectId: "realtime-chat-d0c11",
  storageBucket: "realtime-chat-d0c11.appspot.com",
  messagingSenderId: "903295854347",
  appId: "1:903295854347:web:21fc66b12ebb876cc7e40e",
  measurementId: "G-T6WWMBTDF4",
  databaseURL:
    "https://realtime-chat-d0c11-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
