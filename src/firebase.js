// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore" ;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiLlq0RY4gRBFkbiORZfFW76qkejEaIQM",
  authDomain: "exercicefirebase-3edb7.firebaseapp.com",
  projectId: "exercicefirebase-3edb7",
  storageBucket: "exercicefirebase-3edb7.appspot.com",
  messagingSenderId: "499260455420",
  appId: "1:499260455420:web:712acebcad9b1ca9d01a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize FireStore Database
export const firestore = getFirestore(app) ;


export default app;
