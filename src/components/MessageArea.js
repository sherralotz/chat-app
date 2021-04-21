import React, { useState } from "react";
import MessageDisplayList from "./MessageDisplayList";
import MessageInputArea from "./MessageInputArea";

export default function MessageArea() {
  //  constructor(){
  //    super();
  //    this.state ={
  //      messages: []
  //    }
  //    this.sendMessage = this.sendMessage.bind(this);
  //    this.handleMessage = this.handleMessage.bind(this);
  //  }
  //  handleMessage(){
  //     this.setState(prevState=>{

  //     });
  //  }
  //  handleMessageInputChange(){
  //     this.setState(prevState => {

  //     });
  //  }
  //  sendMessage(){
  //     const messages = this.state.messages;
  //     console.log(messages);
  //  }
  const messageTempList = [
    { text: "hello", id: 1 },
    { text: "hi", id: 2 },
  ];
  const [message, setMessages] = useState("");
  const [messageList, setMessageList] = useState(messageTempList);

  const submitMessageForm = (e) => {
    e.preventDefault();
    setMessageList([
      ...messageList,
      {
        text: message,
        createdOn: new Date().toString(),
        id: messageList.length + 1,
      },
    ]);
    setMessages("");
  };
  //console.log(messageList);
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
