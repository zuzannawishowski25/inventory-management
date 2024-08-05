// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZubzABFCECS96qspuHvC-3okUbzqnwRw",
  authDomain: "inventory-management-e6631.firebaseapp.com",
  projectId: "inventory-management-e6631",
  storageBucket: "inventory-management-e6631.appspot.com",
  messagingSenderId: "186033277224",
  appId: "1:186033277224:web:624886fc997cb02790e81d",
  measurementId: "G-WS5LB6K3VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}