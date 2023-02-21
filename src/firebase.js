// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3CyqwnK63dYzuE8CUwY77584zjq5qpeo",
  authDomain: "realtime-example-77634.firebaseapp.com",
  projectId: "realtime-example-77634",
  storageBucket: "realtime-example-77634.appspot.com",
  messagingSenderId: "21656260066",
  appId: "1:21656260066:web:3308668887719e8321fdbb",
  measurementId: "G-4GLNJ88TMC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
