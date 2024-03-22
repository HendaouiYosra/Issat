/*import firebase from "firebase/app";
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});
export const auth = app.auth();
export default app;
*/
import{getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCG_sqEqm6mX4p0V1PLnKU5ykshF7aa0hQ",
  authDomain: "universite-dev.firebaseapp.com",
  projectId: "universite-dev",
  storageBucket: "universite-dev.appspot.com",
  messagingSenderId: "1045538601660",
  appId: "1:1045538601660:web:28d1b0a27301eb391a6eb9"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);