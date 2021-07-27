import { get, set } from "local-storage";

function Header() {
  const randID = 1000 + Math.floor(Math.random() * 9000); // random 4 digit ID
  const username = get<string>("username") || `Guest ${randID}`;
  set<string>("username", username);

  return (
    <>
      <div className="hero is-info is-bold">
        <div className="columns">
          <div className="hero-body">
            <div className="column is-three-quarters">
              <p className="title">CurrChat</p>
              <p className="subtitle">Real-time current events chat rooms</p>
            </div>
            <div className="column">
              <label className="text">Your Name:</label>
              <input className="input" placeholder={username} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
