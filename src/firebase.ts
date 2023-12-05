// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANViGINbzs0zGMliUcbtqjCMF74E4dqjE",
  authDomain: "chatsnchats-0.firebaseapp.com",
  projectId: "chatsnchats-0",
  storageBucket: "chatsnchats-0.appspot.com",
  messagingSenderId: "1039298294261",
  appId: "1:1039298294261:web:b392be199800c1a42d30bc",
  measurementId: "G-B7M8FV53PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);