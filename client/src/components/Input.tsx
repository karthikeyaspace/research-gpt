import React, { useState, KeyboardEvent } from "react";

interface InputProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
}

const Input: React.FC<InputProps> = ({ setInput, sendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
      setInputValue("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="bg-primary p-3 text-center h-20">
      <div className="max-w-3xl mx-auto flex flex-row gap-2  relative rounded-full bg-secondary/10 ">
        <textarea
          rows={1}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Research your topic"
          className="w-11/12 px-8 py-3 text-secondary bg-transparent resize-none focus:outline-none"
        />
        <button
          onClick={() => {
            sendMessage();
            setInputValue("");
          }}
          className="h-full absolute right-10 text-gray-400"
        >
          <svg
            className="w-6 h-6  dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="text-[10px] text-secondary leading-1">
        Research gpt can make mistakes. Check important info
      </p>
    </div>
  );
};

export default Input;
