// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI-JoOOyOA2-GD1RLkq6GJs0IKxn9_D04",
  authDomain: "irctc-clone-6f49c.firebaseapp.com",
  projectId: "irctc-clone-6f49c",
  storageBucket: "irctc-clone-6f49c.firebasestorage.app",
  messagingSenderId: "1069950239676",
  appId: "1:1069950239676:web:6bb4f2adea455eb0be61b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default app;
