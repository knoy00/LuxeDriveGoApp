// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8pSlMmzqFsptXrACdyhtcKfqRJmiViXY",
  authDomain: "luxedrivego.firebaseapp.com",
  projectId: "luxedrivego",
  storageBucket: "luxedrivego.firebasestorage.app",
  messagingSenderId: "703719786559",
  appId: "1:703719786559:web:9446461a1a8b13b08a908a",
  measurementId: "G-8E93N716TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {app, analytics}