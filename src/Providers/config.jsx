// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-93nlucczZrO2ZxcbMqqvu0Zo3Zpzess",
  authDomain: "phinex-news.firebaseapp.com",
  projectId: "phinex-news",
  storageBucket: "phinex-news.firebasestorage.app",
  messagingSenderId: "440857876869",
  appId: "1:440857876869:web:069003d22dfeca049d8cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;