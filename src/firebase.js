// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQbRTO33pzpsEqxFGZiKqWNLMCSw4BlkE",
  authDomain: "crud-firebase-2e611.firebaseapp.com",
  projectId: "crud-firebase-2e611",
  storageBucket: "crud-firebase-2e611.appspot.com",
  messagingSenderId: "182080376089",
  appId: "1:182080376089:web:1cd5382358e7cfed3e0988"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}