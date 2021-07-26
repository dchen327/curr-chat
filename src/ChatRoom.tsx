import { useState } from "react";

function ChatRoom() {
  const [formValue, setFormValue] = useState("");

  return (
    <>
      <form onSubmit={() => console.log("submitted")}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="type to chat!"
        />
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
