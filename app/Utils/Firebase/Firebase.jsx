// Import necessary functions
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import Constants from "expo-constants";


// Firebase configuration using environment variables
const firebaseConfig = {
    apiKey: Constants.expoConfig.extra.firebaseApiKey,
    authDomain: Constants.expoConfig.extra.firebaseAuthDomain,
    projectId: Constants.expoConfig.extra.firebaseProjectId,
    storageBucket: Constants.expoConfig.extra.firebaseStorageBucket,
    messagingSenderId: Constants.expoConfig.extra.firebaseMessagingSenderId,
    appId: Constants.expoConfig.extra.firebaseAppId,
    measurementId: Constants.expoConfig.extra.firebaseMeasurementId
  };

// Ensure Firebase is only initialized once
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Initialize analytics only if in a browser environment
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize authentication
const auth = getAuth(app);

export { app, analytics, auth };
