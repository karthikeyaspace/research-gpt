import React, { useEffect, useState } from "react";
import axios from "axios";
import { SourcesProps } from "../utils/types";
import YoutubeCard from "./YoutubeCard";
import loadingGif from "../assets/loading.gif";
import GoogleSearchCard from "./GoogleSearchCard";
const url = import.meta.env.VITE_BACKEND_URL;

const Sources: React.FC<SourcesProps> = ({ show, toggleShow, payload }) => {
  const [sources, setSources] = useState<any>({
    ytSources: [],
    googleSources: [],
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(url+"/api/sources/keywords", {
          keywords: payload.keywords,
        });
        if (response.data.success) setSources(response.data.payload);
        else console.log("Error in fetching sources");
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (show) fetchData();
    else setSources({});
  }, [show, payload.keywords]);

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
      <div className="w-full md:w-1/2 h-full relative p-6 bg-[#27272a] text-white overflow-y-scroll small-scrollbar">
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
        <div className="flex flex-wrap justify-center gap-4">
          {sources.ytSources && sources.ytSources.length > 0
            ? sources.ytSources.map((source: any, index: number) => (
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
              ))
            : !loading && <p>No YouTube sources found</p>}
        </div>
        <div className="mt-8">
          {sources.googleSources && sources.googleSources.length > 0
            ? sources.googleSources.map((source: any, index: number) => (
                <GoogleSearchCard
                  key={index}
                  source={{
                    title: source.title,
                    link: source.link,
                    snippet: source.snippet,
                  }}
                />
              ))
            : !loading && <p>No Google search results found</p>}
        </div>
      </div>
    </div>
  );
};

export default Sources;
