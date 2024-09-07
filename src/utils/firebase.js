// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_ZZC5AQnzKUNSrlq3UNBUZ9_3BH7v3_o",
  authDomain: "netflix-gpt-e4750.firebaseapp.com",
  projectId: "netflix-gpt-e4750",
  storageBucket: "netflix-gpt-e4750.appspot.com",
  messagingSenderId: "475857438870",
  appId: "1:475857438870:web:5876a580cd8912f45cdab7",
  measurementId: "G-E9J80YCK7H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
