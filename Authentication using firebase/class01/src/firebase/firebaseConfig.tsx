// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoV4pyLBT4MwmHJgtXVhGDLO-xhKqiB3A",
  authDomain: "nextjs-9d1c4.firebaseapp.com",
  projectId: "nextjs-9d1c4",
  storageBucket: "nextjs-9d1c4.appspot.com",
  messagingSenderId: "832661739165",
  appId: "1:832661739165:web:0a414b94819bbc5f416674",
  measurementId: "G-XHL2WLPMM3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);