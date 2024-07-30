import React from "react";

interface YTCardProps {
  source: {
    videoId: string;
    title: string;
    description: string;
    thumbnail: string;
    channelTitle: string;
    publishedAt: string;
  };
}

const YoutubeCard: React.FC<YTCardProps> = ({ source }) => {
  const { videoId, title, thumbnail, channelTitle, publishedAt } = source;

  const formatDate = (dateString: string) => {
    const now = new Date();
    const publishDate = new Date(dateString);
    const diffTime = Math.abs(now.getTime() - publishDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  return (
    <div className="w-72 rounded-lg overflow-hidden mb-4">
      <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
        <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
        <div className="p-2">
          <p className="text-sm font-semibold mb-1">{title}</p>
          <div className="flex flex-row justify-between">
            <p className="text-xs text-gray-400">{channelTitle}</p>
            <p className="text-xs text-gray-500">{formatDate(publishedAt)}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default YoutubeCard;
