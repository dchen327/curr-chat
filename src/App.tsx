import React, { useState } from "react";
import { get, set } from "local-storage";

import "bulma/css/bulma.min.css";

import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";
import Header from "./Header";

function App() {
  // grab username from local storage or generate random username
  const randID = 1000 + Math.floor(Math.random() * 9000); // random 4 digit ID
  const [username, setUsername] = useState(
    get<string>("username") || `Guest ${randID}`
  );
  set<string>("username", username);

  const changeUsername = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    set<string>("username", username);
  };

  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-head">
          <Header
            username={username}
            setUsername={setUsername}
            changeUsername={changeUsername}
          />
        </div>
        <div className="hero-body">
          <ChatMessages />
        </div>
        <div className="hero-foot">
          <MessageInput username={username} />
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
