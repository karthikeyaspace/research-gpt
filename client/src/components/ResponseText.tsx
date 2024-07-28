import React from "react";

interface ResponseTextProps {
  message: string;
  loading: boolean;
}

const ResponseText: React.FC<ResponseTextProps> = ({ message, loading }) => {
  return (
    <div className="mb-4">
      <div className="flex items-start">
        <div className="w-8 h-8 flex-shrink-0 mr-3 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
          AI
        </div>
        <div className="flex-grow">
          {
            loading ? (
              <p className="text-white">Loading...</p>

            ) : (
              <p className="text-white"> {message} </p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ResponseText;
