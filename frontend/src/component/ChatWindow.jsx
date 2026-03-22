import React, { useState } from "react";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";
import { sendMessageToAI } from "./api";

export default function ChatWindow({ user }) {

  const [messages, setMessages] = useState([]);

  const handleSend = async (msg) => {

    setMessages((prev) => [
      ...prev,
      { text: msg, isSent: true },
    ]);

    if (user?.isAI) {
      const reply = await sendMessageToAI(msg);

      setMessages((prev) => [
        ...prev,
        { text: reply, isSent: false },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full">

      <ChatHeader user={user} />

      <div className="flex-1 bg-slate-100 p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.isSent ? "text-right" : "text-left"
            }`}
          >
            <span className="inline-block bg-white p-2 rounded">
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="p-2 border-t bg-white">
        <MessageInput onsend={handleSend} />
      </div>

    </div>
  );
}