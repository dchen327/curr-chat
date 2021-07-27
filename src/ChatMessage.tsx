function ChatMessage({ message, isOwnMessage }: any) {
  return (
    <p className={`py-3 ${isOwnMessage ? "has-text-right" : ""}`}>
      <span className="tag is-medium">{message}</span>
    </p>
  );
}

export default ChatMessage;
