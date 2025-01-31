// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAclk7K8GHsKDHOqsiZhlJeSBOlOHxwkLk",
  authDomain: "ott-gpt-88bb3.firebaseapp.com",
  projectId: "ott-gpt-88bb3",
  storageBucket: "ott-gpt-88bb3.firebasestorage.app",
  messagingSenderId: "9330093715",
  appId: "1:9330093715:web:56f657974fa1ae22416766",
  measurementId: "G-9SRT02XBKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);