import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAFyJZo2lBhKysYIm6RSXCqy1jjQUtX4ak",
  authDomain: "time-tracker-2e0c0.firebaseapp.com",
  projectId: "time-tracker-2e0c0",
  storageBucket: "time-tracker-2e0c0.appspot.com",
  messagingSenderId: "456150918163",
  appId: "1:456150918163:web:022b8f7edd330f36430be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;