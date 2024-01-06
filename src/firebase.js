// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcOwGHgOe_S10FXTkw6k6Bmwi1scJp_ig",
  authDomain: "finsweet-auth-510c8.firebaseapp.com",
  projectId: "finsweet-auth-510c8",
  storageBucket: "finsweet-auth-510c8.appspot.com",
  messagingSenderId: "964924986368",
  appId: "1:964924986368:web:f6b84b4087b6dcaf3bb4e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
