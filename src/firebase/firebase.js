// Firebase core SDK
import { initializeApp, getApps, getApp } from "firebase/app";

// Firestore
import { getFirestore } from "firebase/firestore";

// Auth
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkh49R7EYys2baaUk-2Pe-Z0IjQsc1UQ4",
  authDomain: "hero-portal-3e186.firebaseapp.com",
  projectId: "hero-portal-3e186",
  storageBucket: "hero-portal-3e186.appspot.com",
  messagingSenderId: "782851820022",
  appId: "1:782851820022:web:4e8ed29c0087d43a9e1fd7",
};

// Ініціалізуємо, якщо не ініціалізовано
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firestore DB
export const db = getFirestore(app);

// Export Auth
export const auth = getAuth(app);
