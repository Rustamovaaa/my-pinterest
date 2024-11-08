// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA22cecnrLDGdQuNzKxjwtbJo9pueR2P8M",
  authDomain: "my-pinterest-33c89.firebaseapp.com",
  projectId: "my-pinterest-33c89",
  storageBucket: "my-pinterest-33c89.firebasestorage.app",
  messagingSenderId: "49097970794",
  appId: "1:49097970794:web:056d01cf4d970914292613",
  measurementId: "G-KRQ3B29EKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;