import React from "react";
import "bulma/css/bulma.min.css";

import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";
import Header from "./Header";

function App() {
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-head">
          <Header />
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
