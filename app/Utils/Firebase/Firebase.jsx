import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Constants from "expo-constants";
import { getAuth } from "firebase/auth";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.firebaseApiKey ,
  authDomain: Constants.expoConfig?.extra?.firebaseAuthDomain ,
  projectId: Constants.expoConfig?.extra?.firebaseProjectId ,
  storageBucket: Constants.expoConfig?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.firebaseMessagingSenderId ,
  appId: Constants.expoConfig?.extra?.firebaseAppId ,
  measurementId: Constants.expoConfig?.extra?.firebaseMeasurementId,
};

let app;
try {
  app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  console.log("Firebase Initialized");
} catch (error) {
  if (error.code === "auth/network-request-failed") {
    console.error("Network error: Please check your internet connection.");
  } else {
    console.error("Firebase initialization failed:", error);
  }
}

let analytics;
try {
  if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
  }
} catch (error) {
  console.error("Analytics initialization failed:", error.message);
}

export { app, analytics };
export const FIREBASE_AUTH = getAuth(app);
