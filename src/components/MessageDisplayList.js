export default function MessageDisplayList(props) {
  const { messages, user, dummy } = props;

  return (
    <div className="chatarea-container">
      {messages &&
        messages.map((message) => {
          let msgSentFromLoggedInUser =
            message.uid === user.uid ? "sent" : "received";
          return (
            <div
              className={`textdisplay ${msgSentFromLoggedInUser}`}
              key={message.id}
            >
              <img
                title={message.displayName}
                className="userimg"
                alt="User face"
                src={message.photoURL}
              ></img>
              <p>{message.text}</p>
            </div>
          );
        })}
      <span ref={dummy}></span>
    </div>
  );
}
