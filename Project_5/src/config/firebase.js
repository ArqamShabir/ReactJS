// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyvTwp0ypvFUGM9dGKYxchGq7iibhazVg",
  authDomain: "project-5-e15f7.firebaseapp.com",
  projectId: "project-5-e15f7",
  storageBucket: "project-5-e15f7.appspot.com",
  messagingSenderId: "653622465687",
  appId: "1:653622465687:web:bb6500dbe898e03cd3c5d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);