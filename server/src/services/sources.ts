import config from "../utils/env";
import logger from "../utils/helpers";

//sources from yt data api
const apiKey = config.GOOGLE_PROJECT_KEY;
const getYTSources = async (keywords: []) => {
  if (!apiKey) throw new Error("GOOGLE_PROJECT_KEY is not set");
  const q = keywords.join("|");
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&maxResults=10&relevanceLanguage=en&type=video&q=${q}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
  } catch (err) {
    logger("Error fetching data from youtube api", err as Error);
  }
  return [];
};

const getGoogleSearchSources = async (keywords: []) => {
  if (!apiKey) throw new Error("GOOGLE_PROJECT_KEY is not set");
  const q = keywords.join(" ");
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${config.GOOGLE_CX}&q=${q}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
  } catch (err) {
    logger("Error fetching data from google search api", err as Error);
  }
  return [];
};

export { getYTSources, getGoogleSearchSources };
