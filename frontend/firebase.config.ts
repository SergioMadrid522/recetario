// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq9NNuz4ILb2M8a0BnTMMLy1RXLGrsKHg",
  authDomain: "recetario-de254.firebaseapp.com",
  projectId: "recetario-de254",
  storageBucket: "recetario-de254.appspot.com",
  messagingSenderId: "1022056348830",
  appId: "1:1022056348830:web:2fa82b8e843f0d0936cf8f",
  measurementId: "G-HLMWWXK5DE"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };