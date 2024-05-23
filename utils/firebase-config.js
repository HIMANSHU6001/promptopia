import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDUOR5fBLea1nKvE74oTkO4FNavWGm-0F8",
  authDomain: "promptopia-423504.firebaseapp.com",
  projectId: "promptopia-423504",
  storageBucket: "promptopia-423504.appspot.com",
  messagingSenderId: "1009129511819",
  appId: "1:1009129511819:web:9840b76030fb863a92ad8e",
  measurementId: "G-M7TMM12VLP"
};

// Initialize Firebase
var app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);

export { app , auth , GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut}