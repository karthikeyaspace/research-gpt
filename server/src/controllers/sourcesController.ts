import { getYTSources, getGoogleSearchSources } from "../services/sources";

//get data sources from topic give by user
//youtube api, google scholar, news api

const getSources = async (keywords: []) => {
  const ytSources = await getYTSources(keywords);
  const googleSources = await getGoogleSearchSources(keywords);
  return { ytSources, googleSources };
};

export { getSources };
