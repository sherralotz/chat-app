export default function MessageDisplayList(props) {
  const { messageList } = props;
  return (
    <div className="chatarea-container">
      {messageList.map((message) => {
        return (
          <div className="textdisplay sent" key={message.id}>
            {message.text}
          </div>
        );
      })}
    </div>
  );
}
