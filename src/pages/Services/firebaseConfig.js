import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATZ6j7LorVtuV7z4tWDZ1IWI0CTwhEVM8",
  authDomain: "sync-authentication.firebaseapp.com",
  projectId: "sync-authentication",
  storageBucket: "sync-authentication.appspot.com",
  messagingSenderId: "807912280878",
  appId: "1:807912280878:web:d2f0a1ccd62697bb7160bf"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);