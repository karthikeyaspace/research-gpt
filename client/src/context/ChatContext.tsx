import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { MessageType, ChatContextTypes } from "../utils/types";
import { initChat } from "../utils/testMessages";

const ChatContext = createContext<ChatContextTypes | undefined>(undefined);

type Props = { children: ReactNode };

export const ChatProvider = ({ children }: Props) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const chat = JSON.parse(localStorage.getItem("chat") || "[]");
    setMessages(chat);
  }, []);

  const storeChat = (messages: MessageType[]) => {
    localStorage.setItem("chat", JSON.stringify(messages));
  };

  const clearChat = () => {
    localStorage.removeItem("chat");
    setMessages(initChat);
  };


  return (
    <ChatContext.Provider value={{ messages,setMessages, storeChat, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context)
    throw new Error("useChatContext must be used within an ChatProvider");
  return context;
};
