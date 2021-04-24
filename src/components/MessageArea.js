import React, { useState } from "react";
import MessageDisplayList from "./MessageDisplayList";
import MessageInputArea from "./MessageInputArea";

export default function MessageArea() {
  const messageTempList = [
    { text: "hello", id: 1, msgLoggedInUser: false },
    { text: "hi", id: 2, msgLoggedInUser: false },
  ];
  const [message, setMessages] = useState("");
  const [messageList, setMessageList] = useState(messageTempList);

  const submitMessageForm = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessageList([
        ...messageList,
        {
          text: message,
          msgLoggedInUser: true,
          createdOn: new Date().toString(),
          id: messageList.length + 1,
        },
      ]);
      setMessages("");
    }
  };
  return (
    <div className="messagearea-container">
      <MessageDisplayList messageList={messageList} />
      <MessageInputArea
        setMessages={setMessages}
        submitMessageForm={submitMessageForm}
        message={message}
      />
    </div>
  );
}
