import './firebase'
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyANViGINbzs0zGMliUcbtqjCMF74E4dqjE",
  authDomain: "chatsnchats-0.firebaseapp.com",
  projectId: "chatsnchats-0",
  storageBucket: "chatsnchats-0.appspot.com",
  messagingSenderId: "1039298294261",
  appId: "1:1039298294261:web:b392be199800c1a42d30bc",
  measurementId: "G-B7M8FV53PP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};