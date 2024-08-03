import React, { useState } from "react";
import loadingGif from "../assets/loading.gif";
import ReactMarkdown from "react-markdown";
import { ResponseTextProps } from "../utils/types";
import Sources from "./Sources";
import Logo from "../assets/Logo";
import { useTheme } from "../context/ThemeContext";

const ResponseText: React.FC<ResponseTextProps> = ({
  payload,
  sendMessage,
}) => {
  const [showSources, setShowSources] = useState<boolean>(false);
  const handleFollowUp = (ques: string) => {
    sendMessage(ques);
  };
  const { theme } = useTheme();

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  if (payload.message === "") {
    return <p>Some error happened</p>;
  }

  return (
    <div className="mt-4 flex items-start">
      <div className="flex-shrink-0 mr-2 rounded-full bg-zinc-900 flex items-center justify-center ">
        <Logo
          primary={theme === "dark" ? "#212121" : "#f6f6f6"}
          secondary={theme === "dark" ? "#f6f6f6" : "#212121"}
          width="28"
        />
      </div>
      <div className="flex-grow">
        {payload.message === "loading" ? (
          <img src={loadingGif} className="w-20"></img>
        ) : (
          <>
            <ReactMarkdown className="text-secondary whitespace-pre-wrap">
              {payload.message || "Some error happened"}
            </ReactMarkdown>

            {payload.follow_up_questions.length > 0 && (
              <div className="mt-8">
                {payload.follow_up_questions.map((ques, index) => (
                  <span
                    key={index}
                    onClick={() => handleFollowUp(ques)}
                    className="inline-block bg-secondary/10 text-secondary text-xs rounded-full px-3   py-1 mb-1 mr-2 hover:cursor-pointer"
                  >
                    {ques}
                  </span>
                ))}
                <br />
                <span
                  className="inline-block bg-[#f59e0b] text-secondary text-xs rounded-full px-2 py-1 mb-1 mr-2 mt-4 hover:cursor-pointer"
                  onClick={toggleSources}
                >
                  get sources
                </span>
              </div>
            )}
          </>
        )}
      </div>
      <Sources
        show={showSources}
        toggleShow={toggleSources}
        payload={payload}
      />
    </div>
  );
};

export default ResponseText;
