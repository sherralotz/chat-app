import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function MessageInputArea(props) {
  return (
    <form onSubmit={(e) => props.submitMessageForm(e)}>
      <input
        type="text"
        value={props.message || ""}
        className="input"
        onChange={(e) => props.setMessages(e.target.value)}
      />
      <button className="sendmsg-btn primary-btn" type="submit">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
}
