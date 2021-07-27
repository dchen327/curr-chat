import { useList } from "react-firebase-hooks/database";
import firebase from "firebase/app";

import ChatMessage from "./ChatMessage";
import { useRef } from "react";

function ChatMessages({ username, dummy }: any) {
  const [snapshots, loading, error] = useList(firebase.database().ref("chats"));

  dummy = useRef();

  return (
    <div className="container px-3">
      {error && <strong>Error: {error}</strong>}
      {!loading &&
        snapshots &&
        snapshots.map((v) => (
          <ChatMessage
            key={v.key}
            name={v.val().name}
            message={v.val().message}
            isOwnMessage={v.val().name === username}
          />
        ))}
      <span ref={dummy}></span>
    </div>
  );
}

export default ChatMessages;
