import { useState } from "react";

function Header({ username, setUsername, storeUsername }: any) {
  const [nameChanged, setNameChanged] = useState(false);
  const [newName, setNewName] = useState("");

  const changeUsernameClicked = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setUsername(newName);
    storeUsername();
    setNameChanged(false); // disable button
  };

  const usernameInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameChanged(true); // enable button
    setNewName(e.target.value);
  };

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
              <form onSubmit={changeUsernameClicked}>
                <label className="content">Your Name:</label>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input
                      className="input"
                      // value={username}
                      onChange={usernameInputChanged}
                      placeholder={username}
                    />
                  </div>
                  <div className="control">
                    <button
                      type="submit"
                      disabled={!nameChanged}
                      className="button is-primary"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
