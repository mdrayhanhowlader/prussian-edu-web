// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCbyGUlCimTajSMXvHnO06kATXb2vWW7c",
  authDomain: "prussian-edu.firebaseapp.com",
  projectId: "prussian-edu",
  storageBucket: "prussian-edu.appspot.com",
  messagingSenderId: "944358028789",
  appId: "1:944358028789:web:f6d96077720ea63e811cbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;