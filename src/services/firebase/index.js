import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5LrZGrN5PfFAN7b8LNGyI6Jxpv3WOANw",
  authDomain: "miapp-ad0f5.firebaseapp.com",
  projectId: "miapp-ad0f5",
  storageBucket: "miapp-ad0f5.appspot.com",
  messagingSenderId: "215077164371",
  appId: "1:215077164371:web:39181fab0b5d7aef05bda6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)