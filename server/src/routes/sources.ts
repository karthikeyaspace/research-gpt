import express from 'express';
import { getSources } from '../controllers/sourcesController';
import logger from '../utils/helpers';

const sourcesrouter = express.Router();


sourcesrouter.post('/keywords', async (req, res) => {
    try {
        const { keywords } = req.body;
        if (keywords.length === 0) 
            return res.status(400).send('Keyword is required');
        const result = await getSources(keywords);
        res.send({ success: true, payload: result });
    } catch (error) {
        logger('Error in sources router', error as Error);
        res.status(500).send('An error occurred');
    }
});

export default sourcesrouter;
