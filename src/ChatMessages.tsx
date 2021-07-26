import ChatMessage from "./ChatMessage";

function ChatMessages() {
  const messages = ["hello", "hello", "hello"];

  return (
    <div className="container">
      {messages &&
        messages.map((msg, i) => <ChatMessage key={i} message={msg} />)}
    </div>
  );
}

export default ChatMessages;
