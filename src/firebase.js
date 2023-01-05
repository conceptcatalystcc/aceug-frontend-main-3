import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBea4syb1fMKqtjue6KZqXJdp7S57YHjps",
  authDomain: "aceug-test.firebaseapp.com",
  projectId: "aceug-test",
  storageBucket: "aceug-test.appspot.com",
  messagingSenderId: "1080575172295",
  appId: "1:1080575172295:web:92f938c3267e15d0cfe8e2",
  measurementId: "G-4F1H34KZPV",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
