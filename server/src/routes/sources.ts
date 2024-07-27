import express from 'express';
import dotenv from 'dotenv';
import { getSources } from '../controllers/sourcesController';
import logger from '../utils/helpers';

const sourcesrouter = express.Router();
dotenv.config();


sourcesrouter.post('/keyword', async (req, res) => {
    try {
        const { keyword } = req.body;
        if (!keyword) {
            return res.status(400).send('Keyword is required');
        }
        const result = await getSources(keyword);
        res.send({ success: true, payload: result });
    } catch (error) {
        logger('Error in sourcesrouter', error as Error);
    }
});

export default sourcesrouter;
