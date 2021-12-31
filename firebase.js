// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN5AXrktu5c_OYsipLkVFhhA4No_XsgBU",
  authDomain: "ig-clone-c9ee2.firebaseapp.com",
  projectId: "ig-clone-c9ee2",
  storageBucket: "ig-clone-c9ee2.appspot.com",
  messagingSenderId: "626301534882",
  appId: "1:626301534882:web:f4df31c7830fb6708c4dfb",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export { app, db, storage, auth };
