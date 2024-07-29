import React from "react";
import loadingGif from "../assets/loading.gif";
import ReactMarkdown from 'react-markdown';

interface ResponseTextProps {
  payload: {
    message: string;
    keywords: string[];
    follow_up_questions: string[];
  };
  sendMessage: (ques: string) => void;
}

const ResponseText: React.FC<ResponseTextProps> = ({
  payload,
  sendMessage,
}) => {
  const handleFollowUp = (ques: string) => {
    sendMessage(ques);
  };
  return (
    <div className="mb-4 mt-4 flex items-start">
      <div className="w-8 h-8 flex-shrink-0 mr-2 rounded-full bg-zinc-900 flex items-center justify-center text-white">
        RG
      </div>
      <div className="flex-grow">
        {payload.message === "loading" ? (
          <img src={loadingGif} className="w-20"></img>
        ) : (
          <>
            <ReactMarkdown className="text-white whitespace-pre-wrap">{payload.message || ""}</ReactMarkdown>

            {payload.follow_up_questions.length > 0 && (
              <div className="mt-8">
                {payload.follow_up_questions.map((ques, index) => (
                  <span
                    key={index}
                    onClick={() => handleFollowUp(ques)}
                    className="inline-block bg-secondary/10 text-white text-xs rounded-full px-2 py-1 mb-1 mr-2 hover:cursor-pointer"
                  >
                    {ques}
                  </span>
                ))}
                <br />
                <span
                  className="inline-block bg-[#f59e0b] text-white text-xs rounded-full px-2 py-1 mb-1 mr-2 hover:cursor-pointer"
                  onClick={() => console.log(payload.keywords)}
                >
                  get sources
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ResponseText;
