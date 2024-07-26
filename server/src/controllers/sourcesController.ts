import { getYTSources } from "../services/sources"


//get data sources from topic give by user
//youtube api, google scholar, news api

const getSources = async(keyword: string) => {
    const urlParams = `part=snippet&maxResults=10&type=video&q=${keyword}`
    const ytsources = await getYTSources(urlParams);
    return ytsources;
}


export {
    getSources
}