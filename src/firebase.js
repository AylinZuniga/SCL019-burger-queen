// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUHWrXhkIj4wAy6I9QrG2FuBqtSccJ0y8",
  authDomain: "burger-queen-c04e7.firebaseapp.com",
  projectId: "burger-queen-c04e7",
  storageBucket: "burger-queen-c04e7.appspot.com",
  messagingSenderId: "807300496544",
  appId: "1:807300496544:web:ed04ab58aa48323aa35dc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


