import "./App.css";
import Header from "./components/Header";
import MessageArea from "./components/MessageArea";
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAx06l-RknTDjie9ZUV0KnE3pjS2XhiSsI",
    authDomain: "superchat-f2723.firebaseapp.com",
    projectId: "superchat-f2723",
    storageBucket: "superchat-f2723.appspot.com",
    messagingSenderId: "1081454007055",
    appId: "1:1081454007055:web:aa5339b4a6ea91e9dfa47a",
    measurementId: "G-YSB98DSPQQ",
  });
} else {
  firebase.app();
}

const auth = firebase.auth();

export default function App() {
  const [isLightMode, setLightMode] = useState(false);
  const [user] = useAuthState(auth);

  //console.log(user);
  const isColorLightMode = isLightMode ? "lightmode" : "darkmode";
  const logoutUser = () => {
    firebase.auth().signOut();
  };
  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
    return (
      <button className="signin-btn primary-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    );
  }

  return (
    <div className={`app-container ${isColorLightMode}`}>
      <div className="main-container">
        <Header
          changeColorMode={() => {
            setLightMode(!isLightMode);
          }}
          logoutUser={logoutUser}
          isColorLightMode={isLightMode}
        />
        <div className="messagearea-container">
          {user ? (
            <MessageArea auth={auth} user={user} firebase={firebase} />
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </div>
  );
}
