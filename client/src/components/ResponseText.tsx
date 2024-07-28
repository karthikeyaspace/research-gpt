// ResponseText.tsx
import React from "react";

interface ResponseTextProps {
  message: string;
}

const ResponseText: React.FC<ResponseTextProps> = ({ message }) => {
  return (
    <div className="mb-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            AI
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-white"> {message} </p>
        </div>
      </div>
    </div>
  );
};

export default ResponseText;
