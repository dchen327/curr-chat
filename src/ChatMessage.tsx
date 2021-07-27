function ChatMessage({ name, message, isOwnMessage }: any) {
  return (
    <p className={`py-1 ${isOwnMessage ? "has-text-right" : ""}`}>
      <span className="label icon-text px-2">
        <span className="icon">
          <i className={`${isOwnMessage ? "fas" : "far"} fa-user-circle`}></i>
        </span>
        <span>{name}</span>
      </span>
      <span className={`tag is-large ${isOwnMessage ? "is-success" : ""}`}>
        {message}
      </span>
    </p>
  );
}

export default ChatMessage;
