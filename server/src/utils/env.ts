require('dotenv').config();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_PROJECT_KEY = process.env.GOOGLE_PROJECT_KEY;
const PORT = process.env.PORT;
const GOOGLE_CX = process.env.GOOGLE_CX;

const config: { [key: string]: any } = {
    GOOGLE_API_KEY,
    GOOGLE_PROJECT_KEY,
    PORT,
    GOOGLE_CX
};


Object.keys(config).forEach((key) => {
    if (!config[key]) {
        throw new Error(`Environment variable ${key} is missing`);
    }
});

export default config;