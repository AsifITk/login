// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKf_M6y0WXrtde76Sls3DXhvZeVUYUXt8",
  authDomain: "login-app-7c5a2.firebaseapp.com",
  projectId: "login-app-7c5a2",
  storageBucket: "login-app-7c5a2.appspot.com",
  messagingSenderId: "49723186842",
  appId: "1:49723186842:web:41c7182a3611d73bbb8923",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
