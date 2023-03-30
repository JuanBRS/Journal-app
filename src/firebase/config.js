// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxSbrj-J93LnbB6cV15tUrkOWGDw1d5So",
  authDomain: "react-cursos-39f6f.firebaseapp.com",
  projectId: "react-cursos-39f6f",
  storageBucket: "react-cursos-39f6f.appspot.com",
  messagingSenderId: "12739725500",
  appId: "1:12739725500:web:02dd3f33bc0e7b868328b9"
};

// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);
 export const FirebaseAuth = getAuth (FirebaseApp);
 export const FirebaseDB = getFirestore (FirebaseApp);