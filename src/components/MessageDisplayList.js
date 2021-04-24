export default function MessageDisplayList(props) {
  const { messageList, user } = props;
  console.log(props);
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
            <img className="userimg" alt="User face" src={user.photoURL}></img>
            <p>{message.text}</p>
          </div>
        );
      })}
    </div>
  );
}
