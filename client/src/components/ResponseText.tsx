import React, { useState } from "react";
import { motion } from "framer-motion";
import loadingGif from "../assets/loading.gif";
import ReactMarkdown from "react-markdown";
import { ResponseTextProps } from "../utils/types";
import Sources from "./Sources";
import Logo from "../assets/Logo";
import { useTheme } from "../context/ThemeContext";

const ResponseText: React.FC<ResponseTextProps> = ({
  payload,
  sendMessage,
  isNewResponse = false,
}) => {
  const [showSources, setShowSources] = useState<boolean>(false);
  const handleFollowUp = (ques: string) => {
    sendMessage(ques);
  };
  const { theme } = useTheme();

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  // Handle cases where payload is undefined or null
  if (!payload) {
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
          <p className="text-red-500">Service temporarily unavailable. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!payload.message || payload.message === "") {
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
          <p className="text-red-500">Service temporarily unavailable. Please try again later.</p>
        </div>
      </div>
    );
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
            {isNewResponse ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 0.3
                  }}
                >
                  <ReactMarkdown className="text-secondary whitespace-pre-wrap">
                    {payload.message || "Some error happened"}
                  </ReactMarkdown>
                </motion.div>
              </motion.div>
            ) : (
              <ReactMarkdown className="text-secondary whitespace-pre-wrap">
                {payload.message || "Some error happened"}
              </ReactMarkdown>
            )}

            {payload.follow_up_questions.length > 0 && (
              <motion.div
                className="mt-8"
                initial={isNewResponse ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: isNewResponse ? 1.5 : 0
                }}
              >
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
                  className="inline-block bg-pink-900 text-secondary text-xs rounded-full px-2 py-1 mb-1 mr-2 mt-4 hover:cursor-pointer"
                  onClick={toggleSources}
                >
                  sources
                </span>
              </motion.div>
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
