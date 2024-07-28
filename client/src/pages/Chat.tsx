import React, { useState, useRef, useEffect } from "react";
import Input from "../components/Input";
import axios from "axios";
import ResponseText from "../components/ResponseText";
import UserText from "../components/UserText";

interface Message {
  user: boolean;
  message: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {user: false, message: "Hello! I'm your Research Assistant"}
  ]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { user: true, message: input },
    ]);
    setInput("");
    setIsLoading(true);
    
    try {
      await fetchPrompt(input);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPrompt = async (prompt: string) => {
    try {
      const response = await axios.post("/api/ai/prompt", { prompt });
      console.log(response.data);

      if (response.data.success) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: false, message: response.data.payload },
        ]);
      } else {
        console.log("An error occurred while fetching AI response");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 min-h-screen w-4/5 mx-auto pt-16">
      <div 
        ref={chatContainerRef}
        className="small-scrollbar max-w-3xl w-full h-[calc(100vh-10rem)] mx-auto py-6 px-4 overflow-y-auto"
      >
        {messages.map((msg, index) =>
          msg.user ? (
            <UserText key={index} message={msg.message} />
          ) : (
            <ResponseText key={index} message={msg.message} loading={isLoading}/>
          )
        )}
        
        <div ref={messagesEndRef} />
      </div>
      <Input setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;