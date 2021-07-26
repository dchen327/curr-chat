import React from "react";
import "bulma/css/bulma.min.css";
import ChatRoom from "./ChatRoom";

function App() {
  return (
    <>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">CurrChat</p>
          <p className="subtitle">Real-time current events chat rooms</p>
        </div>
      </section>

      <div className="container">
        <ChatRoom />
      </div>
    </>
  );
}

export default App;
