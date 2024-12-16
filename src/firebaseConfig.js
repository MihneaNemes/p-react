// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqc79EJlqzcWCoqtOtBNOBe-A9RyFBs0k",
  authDomain: "moviepicker-687a4.firebaseapp.com",
  projectId: "moviepicker-687a4",
  storageBucket: "moviepicker-687a4.appspot.com", // Fix the storageBucket URL
  messagingSenderId: "1080679798157",
  appId: "1:1080679798157:web:66973df46e04b1fd5399c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app); // Export the authentication module
