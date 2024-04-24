// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-real-estate-39961.firebaseapp.com',
  projectId: 'mern-real-estate-39961',
  storageBucket: 'mern-real-estate-39961.appspot.com',
  messagingSenderId: '1019518911262',
  appId: '1:1019518911262:web:d7a1b860dbe3f6ce243f0f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
