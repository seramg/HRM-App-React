// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, } from "firebase/database";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmgesvRfGfX4MF5r4xcTPhNo1sgY3l27U",
    authDomain: "human-resources-manageme-367c7.firebaseapp.com",
    databaseURL: "https://human-resources-manageme-367c7-default-rtdb.firebaseio.com",
    projectId: "human-resources-manageme-367c7",
    storageBucket: "human-resources-manageme-367c7.appspot.com",
    messagingSenderId: "40040684447",
    appId: "1:40040684447:web:5ea1a2a1f6393ad689bbaa",
    measurementId: "G-D95JZCKQ90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);