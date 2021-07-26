import { useState } from "react";

function MessageInput() {
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // TODO: send to db with timestamp + name of sender + message
    console.log(formValue);
    setFormValue("");
  };

  return (
    <div className="container">
      <form onSubmit={sendMessage}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Type to chat!"
            />
          </div>
          <div className="control">
            <button
              type="submit"
              disabled={!formValue}
              className="button is-primary"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;
