
// firebase setup

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNDclTe-VjqdViv_TLMC2yY5QQQVFdJcA",
  authDomain: "book-store-52801.firebaseapp.com",
  projectId: "book-store-52801",
  storageBucket: "book-store-52801.firebasestorage.app",
  messagingSenderId: "1035666411834",
  appId: "1:1035666411834:web:f4cb395ed6c6c12e3dc003",
  measurementId: "G-306CR156D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)