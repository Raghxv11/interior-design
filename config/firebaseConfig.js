// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-interior-design-d5a0a.firebaseapp.com",
  projectId: "ai-interior-design-d5a0a",
  storageBucket: "ai-interior-design-d5a0a.firebasestorage.app",
  messagingSenderId: "134631419408",
  appId: "1:134631419408:web:52f58f8778e7ccae736495",
  measurementId: "G-W7BM10RGH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage=getStorage(app);