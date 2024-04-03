// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCACw4Sz9p2S0RuJ8EI6uOh2OYicmAqFqc",
  authDomain: "astroguide-1a945.firebaseapp.com",
  projectId: "astroguide-1a945",
  storageBucket: "astroguide-1a945.appspot.com",
  messagingSenderId: "1031638092251",
  appId: "1:1031638092251:web:9a8cf7dbeda978402a3ffe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
