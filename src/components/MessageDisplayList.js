export default function MessageDisplayList(props) {
  const { messageList } = props;
  return (
    <div className="chatarea-container">
      {messageList.map((message) => {
        let msgSentFromLoggedInUser = message.msgLoggedInUser
          ? "sent"
          : "received";
        return (
          <div
            className={`textdisplay ${msgSentFromLoggedInUser}`}
            key={message.id}
          >
            <img></img>
            <p>{message.text}</p>
          </div>
        );
      })}
    </div>
  );
}
