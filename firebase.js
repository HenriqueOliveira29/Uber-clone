// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY59Q_7Z_H6B1ls6lBdpwA3FUUUDlfcoE",
  authDomain: "uber-next-clone-164ef.firebaseapp.com",
  projectId: "uber-next-clone-164ef",
  storageBucket: "uber-next-clone-164ef.appspot.com",
  messagingSenderId: "53656634824",
  appId: "1:53656634824:web:d64a31deb83b0fe1052cfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}