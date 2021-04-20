import MessageDisplayList from "./MessageDisplayList";
import MessageInputArea from "./MessageInputArea";

export default function MessageArea() {
  return (
    <div className="messagearea-container">
      <MessageDisplayList />
      <MessageInputArea />
    </div>
  );
}
