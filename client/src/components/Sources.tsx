import React, { useEffect, useState } from "react";
import axios from "axios";
import { SourcesProps } from "../utils/types";
import YoutubeCard from "./YoutubeCard";
import loadingGif from "../assets/loading.gif";

const Sources: React.FC<SourcesProps> = ({ show, toggleShow, payload }) => {
  const [sources, setSources] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/sources/keywords", {
          keywords: payload.keywords,
        });
        setLoading(false);
        if (response.data.success) setSources(response.data.payload);
        else console.log("Error in fetching sources");
      } catch (error) {
        console.error(error);
      }
    };

    if (show) fetchData();
    // setSources(testSources);
    else setSources([]);
  }, [show, payload.keywords]);

  console.log(sources);

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleShow();
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 w-full h-full flex justify-end z-20 transform transition-transform duration-500 ease-in-out ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={handleOuterClick}
    >
      <div className="w-1/2 h-full relative p-6 bg-[#27272a] text-white overflow-y-scroll small-scrollbar">
        <button
          onClick={toggleShow}
          className="absolute top-4 right-4 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Sources</h2>
        {loading && (
          <div className="flex justify-center items-center h-96">
            <img src={loadingGif} alt="Loading" />
          </div>
        )}
        {!loading && sources.length === 0 && (
          <div className="flex justify-center items-center h-96">
            <p>No sources found</p>
          </div>
        )}
        <div className="flex flex-wrap justify-start gap-4">
          {sources &&
            sources.map((source: any, index: number) => (
              <YoutubeCard
                key={index}
                source={{
                  videoId: source.id.videoId,
                  title: source.snippet.title,
                  description: source.snippet.description,
                  thumbnail: source.snippet.thumbnails.medium.url,
                  channelTitle: source.snippet.channelTitle,
                  publishedAt: source.snippet.publishedAt,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sources;
