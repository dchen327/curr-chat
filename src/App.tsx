import React from "react";
import "bulma/css/bulma.min.css";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

function App() {
  return (
    <>
      <section className="hero is-fullheight">
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
    </>
  );
}

export default App;
