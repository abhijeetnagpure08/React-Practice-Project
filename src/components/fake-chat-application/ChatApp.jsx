import { useEffect, useState } from "react";
import createConnection from "../utils/chat";
import { users } from "../utils/chat";
import Contacts from "./Contacts";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [subscribedTo, setSubscribedTo] = useState(users[0]);

  console.log(subscribedTo);

  return (
    <div>
      <h1>Contacts</h1>
      <Contacts
        users={users}
        active={subscribedTo}
        onChange={(user) => setSubscribedTo(user)}
      />
      <hr />
      {messages.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}

export default ChatApp;
