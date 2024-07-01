// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDojt4o0lEuj3lNvF2NRJN36--CgLTb_s0",
  authDomain: "netflix-gpt-6c6f3.firebaseapp.com",
  projectId: "netflix-gpt-6c6f3",
  storageBucket: "netflix-gpt-6c6f3.appspot.com",
  messagingSenderId: "450625242389",
  appId: "1:450625242389:web:4b6eee8b8d684086a7151c",
  measurementId: "G-R4K1BSKZX6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
