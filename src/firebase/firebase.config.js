// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBWv1-yTPun2cnfjvtY84KAE73vao6S1w0",
  authDomain: "flixify-2a99b.firebaseapp.com",
  projectId: "flixify-2a99b",
  storageBucket: "flixify-2a99b.appspot.com",
  messagingSenderId: "805289486943",
  appId: "1:805289486943:web:082c79c7f6c934508089ea",
  measurementId: "G-B13DXPC28Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);