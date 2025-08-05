import React, { useState, useRef, useEffect } from "react";
import UserInput from "../components/UserInput";
import ResponseText from "../components/ResponseText";
import UserText from "../components/UserText";
import { useChatContext } from "../context/ChatContext";
import { api } from "../services/api";


const Chat: React.FC = () => {
  const { messages, setMessages, storeChat } = useChatContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [newResponseIndex, setNewResponseIndex] = useState<number | null>(null);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState<boolean>(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const userMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    storeChat(messages);

    // Scroll to bottom only when chat first loads or when shouldScrollToBottom is true
    if (shouldScrollToBottom) {
      scrollToBottom();
      setShouldScrollToBottom(false);
    }
  }, [messages]);

  useEffect(() => {
    // Initial load - scroll to bottom
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const scrollToUserMessage = () => {
    if (userMessageRef.current && chatContainerRef.current) {
      const userMessageTop = userMessageRef.current.offsetTop;
      chatContainerRef.current.scrollTop = userMessageTop - 20; // 20px padding from top
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

    // Scroll to user message after a short delay to ensure DOM is updated
    setTimeout(() => {
      scrollToUserMessage();
    }, 100);

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
      const response = await api.post("/ai/prompt", {
        usertext: prompt,
      });

      if (response.data.success) {
        const currentLength = messages.length;
        
        // Handle case where payload is empty or undefined
        const responsePayload = response.data.payload || {
          message: "Service temporarily unavailable. Please try again later.",
          keywords: [],
          follow_up_questions: []
        };
        
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: false, payload: responsePayload },
        ]);
        setNewResponseIndex(currentLength + 1); // +1 because we also added the user message
      } else {
        console.log("An error occurred while fetching AI response");
        // Add error message to chat
        const currentLength = messages.length;
        setMessages((prevMessages) => [
          ...prevMessages,
          { 
            user: false, 
            payload: {
              message: "An error occurred while fetching the response. Please try again.",
              keywords: [],
              follow_up_questions: []
            }
          },
        ]);
        setNewResponseIndex(currentLength + 1);
      }
    } catch (error) {
      console.log("An error occurred:", error);
      // Add error message to chat for network errors
      const currentLength = messages.length;
      setMessages((prevMessages) => [
        ...prevMessages,
        { 
          user: false, 
          payload: {
            message: "Network error occurred. Please check your connection and try again.",
            keywords: [],
            follow_up_questions: []
          }
        },
      ]);
      setNewResponseIndex(currentLength + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 min-h-screen w-full mx-auto pt-16">
      <div
        ref={chatContainerRef}
        className="small-scrollbar max-w-3xl w-full h-[calc(100vh-9.5rem)] mx-auto py-2 px-4 overflow-y-auto scroll-smooth"
      >
        {messages.map((msg, index) => {
          // Find the last user message index
          let lastUserMessageIndex = -1;
          for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].user) {
              lastUserMessageIndex = i;
              break;
            }
          }
          const isLatestUserMessage = msg.user && index === lastUserMessageIndex;

          return msg.user && msg.payload && msg.payload.message ? (
            <UserText
              key={index}
              payload={msg.payload}
              isLatest={isLatestUserMessage}
              ref={isLatestUserMessage ? userMessageRef : null}
            />
          ) : (
            <ResponseText
              key={index}
              payload={msg.payload}
              sendMessage={sendMessage}
              isNewResponse={index === newResponseIndex}
            />
          );
        })}
        {loading && (
          <ResponseText
            payload={{
              message: "loading",
              keywords: [],
              follow_up_questions: [],
            }}
            sendMessage={sendMessage}
            isNewResponse={false}
          />
        )}
      </div>
      <UserInput sendMessage={sendMessage} loading={loading} />
    </div>
  );
};

export default Chat;
