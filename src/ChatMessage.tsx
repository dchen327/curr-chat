function ChatMessage(props: any) {
  return (
    <p className="py-3 has-text-right">
      <span className="tag is-medium">{props.message}</span>
    </p>
  );
}

export default ChatMessage;
