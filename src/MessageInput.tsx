import { useState } from "react";
import firebase from "firebase/app";
import "firebase/database";

function MessageInput({ username, dummy }: any) {
  const [formValue, setFormValue] = useState("");
  const database = firebase.database();

  const sendMessage = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // TODO: send to db with timestamp + name of sender + message
    database.ref("chats").push({
      name: username,
      message: formValue,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container px-6 mx-6 pb-6">
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
