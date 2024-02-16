// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXyFu8sjT2yj4HEZn2XXt7WXLLVETx8UU",
  authDomain: "netflixgpt-73693.firebaseapp.com",
  projectId: "netflixgpt-73693",
  storageBucket: "netflixgpt-73693.appspot.com",
  messagingSenderId: "866753091113",
  appId: "1:866753091113:web:ea3596e2ceeca40699ee38",
  measurementId: "G-6V6LZJP47Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();