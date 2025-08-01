// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJh4LhIvi2_chky1kCrQVzddO7vd3FJ4c",
  authDomain: "netflix-gpt-8640c.firebaseapp.com",
  projectId: "netflix-gpt-8640c",
  storageBucket: "netflix-gpt-8640c.firebasestorage.app",
  messagingSenderId: "524249731192",
  appId: "1:524249731192:web:81b880a688f2b6836b5d8d",
  measurementId: "G-HF832DTH29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();