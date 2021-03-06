// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_authdomain,
  projectId: process.env.REACT_APP_projectid,
  storageBucket: process.env.REACT_APP_storagebucket,
  messagingSenderId: process.env.REACT_APP_messagingsenderid,
  appId: process.env.REACT_APP_appid,
};
// console.log(firebaseC)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;