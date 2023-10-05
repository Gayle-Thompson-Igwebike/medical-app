// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwlvNh_7HYXSd7BDYja4HMEdjp5EoMllE",
  authDomain: "medical-app-auth-a9338.firebaseapp.com",
  projectId: "medical-app-auth-a9338",
  storageBucket: "medical-app-auth-a9338.appspot.com",
  messagingSenderId: "704220064685",
  appId: "1:704220064685:web:5705bc93aeefd6f4cb8f24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
