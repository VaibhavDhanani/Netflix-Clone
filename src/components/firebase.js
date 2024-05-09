// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-s9vHork0Q5DfZ9Y7zwxHEy_qptKIPMg",
  authDomain: "netflix-clone-a6ebc.firebaseapp.com",
  projectId: "netflix-clone-a6ebc",
  storageBucket: "netflix-clone-a6ebc.appspot.com",
  messagingSenderId: "42849426845",
  appId: "1:42849426845:web:ae1e5642191df5d7cca374",
  measurementId: "G-CVSCPQ3XCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const nclone =getStorage(app)