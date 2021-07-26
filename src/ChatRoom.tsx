import { useState } from "react";

function ChatRoom() {
  const [formValue, setFormValue] = useState("");

  return (
    <>
      <form onSubmit={() => console.log(formValue)}>
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
            <button type="submit" className="button is-primary">
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ChatRoom;
