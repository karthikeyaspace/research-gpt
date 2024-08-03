import { getYTSources, getGoogleSearchSources } from "../services/sources";
import logger from "../utils/helpers";

//get data sources from topic give by user
//youtube api, google scholar, news api

const getSources = async (keywords: []) => {
  try{
    const ytSources = await getYTSources(keywords);
    const googleSources = await getGoogleSearchSources(keywords);
    return { ytSources, googleSources };
  }
  catch(error){
    logger("Error as getSources", error as Error);
  }
};

export { getSources };
