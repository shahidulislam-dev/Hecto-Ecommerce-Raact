// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe5k24klvYzy70uz9qmTNNMXxUSMCX_FU",
  authDomain: "hecto-ecommerce.firebaseapp.com",
  projectId: "hecto-ecommerce",
  storageBucket: "hecto-ecommerce.appspot.com",
  messagingSenderId: "620190613670",
  appId: "1:620190613670:web:840d0fd8bd314c907af467"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app;
