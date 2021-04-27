import React, { useState, useRef, useEffect } from "react";
import MessageDisplayList from "./MessageDisplayList";
import MessageInputArea from "./MessageInputArea";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function MessageArea(props) {
  const { user, firebase, auth } = props;
  const dummy = useRef();
  const messagesRef = firebase.firestore().collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const [message, setMessages] = useState("");
  // const [messageList, setMessageList] = useState(messages ? messages : []);
  const submitMessageForm = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      const { uid, photoURL, displayName } = auth.currentUser;

      await messagesRef.add({
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      setMessages("");
    }
  };

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <MessageDisplayList
        messages={messages}
        dummy={dummy}
        user={user}
        firebase={firebase}
      />

      <MessageInputArea
        setMessages={setMessages}
        submitMessageForm={submitMessageForm}
        message={message}
      />
    </div>
  );
}
