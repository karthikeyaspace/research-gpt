import express from 'express';
import dotenv from 'dotenv';
import { generateText } from '../controllers/aiController';
import logger from '../utils/helpers';
const airouter = express.Router();

dotenv.config();

airouter.post('/prompt', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) 
            return res.status(400).send('Prompt is required');
        const result = await generateText(prompt);
        res.json(result);
    } catch (error) {
        logger('An error occurred in aiController', error as Error);
        res.status(500).send('An error occurred');
    }
});

export default airouter;
