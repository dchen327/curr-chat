function ChatMessage({ name, message, isOwnMessage }: any) {
  return (
    <p className={`py-3 ${isOwnMessage ? "has-text-right" : ""}`}>
      <label className="px-2 label">{name}</label>
      <span className={`tag is-large ${isOwnMessage ? "is-success" : ""}`}>
        {message}
      </span>
    </p>
  );
}

export default ChatMessage;
