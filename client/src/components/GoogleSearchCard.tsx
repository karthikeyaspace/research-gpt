import React from "react";
import { GoogleCardProps } from "../utils/types";
const GoogleSearchCard: React.FC<GoogleCardProps> = ({ source }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <a
        href={source.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        <h4 className="text-lg font-semibold">{source.title}</h4>
      </a>
      <p className="text-sm text-gray-300 mt-2">{source.snippet}</p>
    </div>
  );
};

export default GoogleSearchCard;
