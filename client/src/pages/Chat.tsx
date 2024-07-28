// Chat.tsx
import React, { useState, useEffect, useRef } from "react";
import Input from "../components/Input";
import axios from "axios";
import ResponseText from "../components/ResponseText";
import UserText from "../components/UserText";
// import SourceList from "../components/SourceList";

interface Message {
  user: boolean;
  message: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { user: false, message: "Hello! I'm your AI assistant." },
    {user: true, message: "Tell me a long story"},
    {user:false, message: "The old woman sat on her porch swing, watching the sunset paint the sky in hues of orange and purple. A gentle breeze carried the scent of honeysuckle and pine, a familiar fragrance that always brought back memories. Her wrinkled hands, gnarled like the branches of a gnarled oak, clutched a faded photograph.It was a picture of her, younger and vibrant, standing beside a tall, handsome man. He had a mischievous glint in his eyes and a smile that could light up a room. They were young, in love, and the world was theirs to conquer.But life had a way of changing things.  The man in the photo, her beloved John, had passed away years ago, leaving her with a heart full of bittersweet memories.The photo slipped from her grasp and landed on the weathered floorboards.  She  reached down to retrieve it, but a small, brown object caught her eye. A tiny, wooden acorn, perfectly carved with intricate details, lay nestled int"},
    {user:true, message: "Tell me a long story"},
    {user:false, message: "The The old woman sat on her porch swing, watching the sunset paint the sky in hues of orange and purple. A gentle breeze carried the scent of honeysuckle and pine, a familiar fragrance that always brought back memories. Her wrinkled hands, gnarled like the branches of a gnarled oak, clutched a faded photograph.It was a picture of her, younger and vibrant, standing beside a tall, handsome man. He had a mischievous glint in his eyes and a smile that could light up a room. They were young, in love, and the world was theirs to conquer.But life had a way of changing things.  The man in the photo, her beloved John, had passed away years ago, leaving her with a heart full of bittersweet memories.The photo slipped from her grasp and landed on the weathered floorboards.  She  reached down to retrieve it, but a small, brown object caught her eye. A tiny, wooden acorn, perfectly carved with intricate details, lay nestled int"}
  ]);
  const [ms, setMs] = useState<Message[]>([
    {user:true, message: "hai"}
  ])
  const [input, setInput] = useState<string>("");
  // const [sources, setSources] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
      // await fetchSources(input);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPrompt = async (prompt: string) => {
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
  };

  // const fetchSources = async (keyword: string) => {
  //   const response = await axios.get(`/api/sources/${keyword}`);
  //   if (response.data.success) {
  //     setSources(response.data.sources);
  //   } else {
  //     console.log("An error occurred while fetching sources");
  //   }
  // };
  console.log(messages)
  return (
    <div className="flex flex-row gap-4 min-h-screen w-4/5 mx-auto pt-16 pb-24">
      <div className="max-w-3xl mx-auto py-6 px-4 overflow-auto">
        {messages.map((msg, index) =>
          msg.user ? (
            <UserText key={index} message={msg.message} />
          ) : (
            <ResponseText key={index} message={msg.message} />
          )
        )}
        {isLoading && (
          <div className="text-center text-gray-300">Loading...</div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* removing sources tab - onclick scrolled tab is better */}
      {/* <div className="w-1/3">
        <h2 className="text-xl font-bold mb-4 text-white">Sources</h2>
        <SourceList sources={sources} />
      </div> */}

      <Input setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
