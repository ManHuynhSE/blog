// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOpNLFAhoNmgjY38X7Wo85XQuyFwhHJEA",
    authDomain: "myblog-be8c3.firebaseapp.com",
    projectId: "myblog-be8c3",
    storageBucket: "myblog-be8c3.firebasestorage.app",
    messagingSenderId: "528637581961",
    appId: "1:528637581961:web:462df3a3250e9943d34458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };