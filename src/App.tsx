import React from "react";
import "bulma/css/bulma.min.css";
import firebase from "firebase/app";
import ls, { get, set, clear } from "local-storage";

import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

function App() {
  // init firebase
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };

  if (firebase.apps.length === 0) {
    // don't reinitialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  const randID = 1000 + Math.floor(Math.random() * 9000); // random 4 digit ID
  const username = get<string>("username") || `Guest ${randID}`;
  set<string>("username", username);

  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-head">
          <div className="hero is-info is-bold">
            <div className="columns">
              <div className="hero-body">
                <div className="column is-three-quarters">
                  <p className="title">CurrChat</p>
                  <p className="subtitle">
                    Real-time current events chat rooms
                  </p>
                </div>
                <div className="column">
                  <label className="text">Your Name:</label>
                  <input className="input" placeholder={username} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-body">
          <ChatMessages />
        </div>

        <div className="hero-foot">
          <MessageInput />
        </div>

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>CurrChat</strong> by{" "}
              <a href="https://davidxchen.com">David Chen</a>. Built with React,
              Bulma, and Firebase.
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
