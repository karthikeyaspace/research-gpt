import { getYTSources } from "../services/sources"


//get data sources from topic give by user
//youtube api, google scholar, news api

const getSources = async(keywords: []) => {
    const ytsources = await getYTSources(keywords);
    return ytsources;
}


export {
    getSources
}