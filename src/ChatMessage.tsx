function ChatMessage({ name, message, isOwnMessage }: any) {
  return (
    <p className={`py-3 ${isOwnMessage ? "has-text-right" : ""}`}>
      <label className="px-2 label">{name}</label>
      <span className="label icon-text">
        <span className="icon">
          <i className="fas fa-arrow-right"></i>
        </span>
        <span>Home</span>
      </span>
      <span className={`tag is-large ${isOwnMessage ? "is-success" : ""}`}>
        {message}
      </span>
    </p>
  );
}

export default ChatMessage;
