// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDViHazoozNXElG7-wKIdKr6gfMh2wqnGY",
  authDomain: "movie-pics-8d853.firebaseapp.com",
  projectId: "movie-pics-8d853",
  storageBucket: "movie-pics-8d853.appspot.com",
  messagingSenderId: "75701157507",
  appId: "1:75701157507:web:974ec890067559968aa5b6",
  measurementId: "G-GD7L0ZRTP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
