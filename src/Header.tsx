function Header({ username, setUsername, changeUsername }: any) {
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
              <form onSubmit={changeUsername}>
                <label className="content">Your Name:</label>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input
                      className="input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder={username}
                    />
                  </div>
                  <div className="control">
                    <button
                      type="submit"
                      disabled={!username}
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
