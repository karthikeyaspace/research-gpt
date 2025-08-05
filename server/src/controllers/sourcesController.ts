import { getYTSources, getGoogleSearchSources } from "../services/sources";
import logger from "../utils/helpers";

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
