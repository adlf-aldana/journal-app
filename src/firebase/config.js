// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUhxbu3DCrrtSJ8ZC1XvlJmGzy8QN-wZQ",
  authDomain: "react-cursos-c535d.firebaseapp.com",
  projectId: "react-cursos-c535d",
  storageBucket: "react-cursos-c535d.appspot.com",
  messagingSenderId: "866706183811",
  appId: "1:866706183811:web:36279a146020fa0f6f6db6",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
