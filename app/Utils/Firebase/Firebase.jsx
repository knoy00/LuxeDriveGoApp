// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_MY_API,
  authDomain: process.env.REACT_APP_MY_AUTH,
  projectId: process.env.REACT_APP_MY_PROJECT_ID,
  storageBucket: process.env.REACT_APP_MY_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MY_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MY_APP_ID,
  measurementId: process.env.REACT_APP_MY_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {app, analytics}