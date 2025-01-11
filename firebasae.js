import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyCTyE98UtNQj5h_NjQGpkOc3OZlN5L_ZGU", 
  authDomain: "speedate-app2809.firebaseapp.com",
  projectId: "speedate-app2809",
  storageBucket: "speedate-app2809.appspot.com",
  messagingSenderId: "185728606396", // Replace with actual value from console
  appId: "1:185728606396:web:92ab963d2748459bd1f0b9", // Replace with actual value from console
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Authentication instances
export const db = getFirestore(app);
export const auth = getAuth(app);
