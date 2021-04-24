import React, { useState } from "react";
import MessageDisplayList from "./MessageDisplayList";
import MessageInputArea from "./MessageInputArea";

export default function MessageArea(props) {
  const { user } = props;
  const messageTempList = [
    { text: "hello", id: 1, msgLoggedInUser: false },
    { text: "hi", id: 2, msgLoggedInUser: false },
  ];
  const [message, setMessages] = useState("");
  const [messageList, setMessageList] = useState(messageTempList);
  //console.log(user);
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
    <div>
      <MessageDisplayList messageList={messageList} user={user} />
      <MessageInputArea
        setMessages={setMessages}
        submitMessageForm={submitMessageForm}
        message={message}
      />
    </div>
  );
}
