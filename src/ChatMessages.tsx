import ChatMessage from "./ChatMessage";

function ChatMessages({ username }: any) {
  const messages = [
    { name: "dchen", message: "Hello World" },
    { name: "Thomas", message: "Hello World" },
    { name: "dchen", message: "Hello World" },
    { name: "Thomas", message: "Hello World" },
  ];

  return (
    <div className="container">
      {messages &&
        messages.map((msg, i) => (
          <ChatMessage
            key={i}
            message={msg.message}
            isOwnMessage={msg.name === username}
          />
        ))}
    </div>
  );
}

export default ChatMessages;
