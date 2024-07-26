import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.GOOGLE_PROJECT_KEY
if (!apiKey) throw new Error("GOOGLE_PROJECT_KEY is not set");


const getYTSources = async (urlParams: string) => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&${urlParams}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
}


export {
    getYTSources
}