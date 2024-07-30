import express from 'express';
import { getSources } from '../controllers/sourcesController';
import logger from '../utils/helpers';

const sourcesrouter = express.Router();


sourcesrouter.post('/keywords', async (req, res) => {
    try {
        const { keywords } = req.body;
        if (keywords.length === 0) 
            return res.status(400).send('Keyword is required');
        console.log(keywords)
        const result = await getSources(keywords);
        res.send({ success: true, payload: result });
    } catch (error) {
        logger('Error in sourcesrouter', error as Error);
    }
});

export default sourcesrouter;
