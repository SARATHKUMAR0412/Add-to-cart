import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6dOOHktmdUMeuKDGp6ONGZTI02_0zZso",
  authDomain: "e-commerce-website-6003b.firebaseapp.com",
  projectId: "e-commerce-website-6003b",
  storageBucket: "e-commerce-website-6003b.appspot.com",
  messagingSenderId: "857833982095",
  appId: "1:857833982095:web:ae2d98dc1322417e62c8fa",
  measurementId: "G-11DS3V837F",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
