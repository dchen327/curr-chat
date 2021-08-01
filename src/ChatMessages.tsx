import { useList } from "react-firebase-hooks/database";
import firebase from "firebase/app";

import ChatMessage from "./ChatMessage";
import { useEffect, useRef } from "react";

function ChatMessages({ username }: any) {
  const [snapshots, loading, error] = useList(firebase.database().ref("chats"));
  const dummy = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [snapshots]);

  return (
    <div className="container px-4">
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
