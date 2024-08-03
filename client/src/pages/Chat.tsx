import React, { useState, useRef, useEffect } from "react";
import UserInput from "../components/UserInput";
import axios from "axios";
import ResponseText from "../components/ResponseText";
import UserText from "../components/UserText";
import { MessageType } from "../utils/types";
import { initChat } from "../utils/testMessages";
import { getChat, storeChat } from "../utils/localStoragChat";
const url = import.meta.env.VITE_BACKEND_URL;

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>(
    getChat().length > 0 ? getChat() : initChat
  );
  const [loading, setLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
    storeChat(messages);
  }, [messages, loading]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  const sendMessage = async (ques: string) => {
    if (ques.trim() === "") return;
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        user: true,
        payload: { message: ques, keywords: [], follow_up_questions: [] },
      },
    ]);
    setLoading(true);

    try {
      await fetchPrompt(ques);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPrompt = async (prompt: string) => {
    try {
      const response = await axios.post(url + "/ai/prompt", { usertext: prompt });

      if (response.data.success) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: false, payload: response.data.payload },
        ]);
      } else {
        console.log("An error occurred while fetching AI response");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 min-h-screen w-full mx-auto pt-16">
      <div
        ref={chatContainerRef}
        className="small-scrollbar max-w-3xl w-full h-[calc(100vh-9.5rem)] mx-auto py-2 px-4 overflow-y-auto"
      >
        {messages.map((msg, index) =>
          msg.user && msg.payload && msg.payload.message ? (
            <UserText key={index} payload={msg.payload} />
          ) : (
            <ResponseText
              key={index}
              payload={msg.payload}
              sendMessage={sendMessage}
            />
          )
        )}
        {loading && (
          <ResponseText
            payload={{
              message: "loading",
              keywords: [],
              follow_up_questions: [],
            }}
            sendMessage={sendMessage}
          />
        )}
      </div>
      <UserInput sendMessage={sendMessage} loading={loading} />
    </div>
  );
};

export default Chat;
