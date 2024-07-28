import config from '../utils/env';
import logger from '../utils/helpers';


//sources from yt data api
const apiKey = config.GOOGLE_PROJECT_KEY
const getYTSources = async (urlParams: string) => {
    if (!apiKey) throw new Error("GOOGLE_PROJECT_KEY is not set");
    
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&${urlParams}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data.items;
    }
    catch(err){
        logger("Error fetching data from youtube api", err as Error);
    }
    return [];
}




export {
    getYTSources
}