// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/app"
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getDatabase } from "firebase/database"
import {getFirestore} from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaQOMXnBIV5dk1JmJ-gHlYkWjBJ6TdW7g",
  authDomain: "linkedin-clone-28da6.firebaseapp.com",
  projectId: "linkedin-clone-28da6",
  storageBucket: "linkedin-clone-28da6.appspot.com",
  messagingSenderId: "934762281390",
  appId: "1:934762281390:web:6c7fb2c0e175118d3cb03f",
  measurementId: "G-T904JQTM3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = new getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const storage = getStorage(app);
export { auth, provider , storage};

export default db;