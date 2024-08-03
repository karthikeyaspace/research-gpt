import express from 'express';
import { generateText } from '../controllers/aiController';
import logger from '../utils/helpers';
const airouter = express.Router();

airouter.post('/prompt', async (req, res) => {
    try {
        const { usertext } = req.body;
        if (!usertext) 
            return res.status(400).send('Prompt is required');
        const result = await generateText(usertext); //json return
        res.send({ success: true, payload: result });
    } catch (error) {
        logger('An error occurred in ai router', error as Error);
        res.status(500).send('An error occurred');
    }
});

export default airouter;
