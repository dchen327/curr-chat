import React from "react";
import "bulma/css/bulma.min.css";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <section className="hero is-large">
        <div className="hero-head">
          <div className="hero is-info is-bold">
            <div className="hero-body">
              <div className="container">
                <p className="title">CurrChat</p>
                <p className="subtitle">Real-time current events chat rooms</p>
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
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>CurrChat</strong> by{" "}
            <a href="https://davidxchen.com">David Chen</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
