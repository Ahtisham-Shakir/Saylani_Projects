// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt2bq3tVEjfpoEup99onc-8I_HHmPP3N0",
  authDomain: "fir-practice-131aa.firebaseapp.com",
  projectId: "fir-practice-131aa",
  storageBucket: "fir-practice-131aa.appspot.com",
  messagingSenderId: "1054152307989",
  appId: "1:1054152307989:web:cf78050cf42d5f3568251c",
  measurementId: "G-4R737DQH20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};