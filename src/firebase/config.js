// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers/getEnvironments";

// acceso a las variables de entorno
// console.log(import.meta.env);
const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();
// console.log(env);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// PROD
// const firebaseConfig = {
//   apiKey: "AIzaSyAUhxbu3DCrrtSJ8ZC1XvlJmGzy8QN-wZQ",
//   authDomain: "react-cursos-c535d.firebaseapp.com",
//   projectId: "react-cursos-c535d",
//   storageBucket: "react-cursos-c535d.appspot.com",
//   messagingSenderId: "866706183811",
//   appId: "1:866706183811:web:36279a146020fa0f6f6db6",
// };

// TESTING
// const firebaseConfig = {
//   apiKey: "AIzaSyDPhJD-92zsEXVP857uZNzgnoDGuBZVU7A",
//   authDomain: "react-cursos-test-41da8.firebaseapp.com",
//   projectId: "react-cursos-test-41da8",
//   storageBucket: "react-cursos-test-41da8.appspot.com",
//   messagingSenderId: "898671245126",
//   appId: "1:898671245126:web:7d27b77c4beec6bf121747",
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};
console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
