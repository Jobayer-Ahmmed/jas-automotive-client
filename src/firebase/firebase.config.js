
import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC36piyZE_PZQN8W-xjw3NIpqcujCst4wI",
  authDomain: "jas-auth-6b26f.firebaseapp.com",
  projectId: "jas-auth-6b26f",
  storageBucket: "jas-auth-6b26f.appspot.com",
  messagingSenderId: "665912777527",
  appId: "1:665912777527:web:1b79bca5ca5a0a940298b2"
};


const app = initializeApp(firebaseConfig);
const myAuth = getAuth(app)
export default myAuth