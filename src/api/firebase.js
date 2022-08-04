// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRqBxp8lp63LzSURg9L356K_U-Q3SRFtI",
    authDomain: "reactbasic-8848e.firebaseapp.com",
    projectId: "reactbasic-8848e",
    storageBucket: "reactbasic-8848e.appspot.com",
    messagingSenderId: "747195572806",
    appId: "1:747195572806:web:ff892ff082a9fff8792047",
    measurementId: "G-7W4J3SB86L"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
