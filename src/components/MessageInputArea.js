export default function MessageInputArea(props) {
  return (
    <form onSubmit={(e) => props.submitMessageForm(e)}>
      <input
        type="text"
        value={props.message || ""}
        className="input"
        onChange={(e) => props.setMessages(e.target.value)}
      />
      <button className="sendmsg-btn" type="submit">
        🔥
      </button>
    </form>
  );
}
