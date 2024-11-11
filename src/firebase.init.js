// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBgtCdrebnvJDBbtyg4k2cC1tzjn13q8M",
  authDomain: "authentication-b717b.firebaseapp.com",
  projectId: "authentication-b717b",
  storageBucket: "authentication-b717b.firebasestorage.app",
  messagingSenderId: "70290980638",
  appId: "1:70290980638:web:91b51a1d5dcb815c27930f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);