import express from 'express';
import airouter from './routes/ai'
import sourcesrouter from './routes/sources';
import config from './utils/env';
import cors from 'cors';


const app = express();
const port = config.PORT || 3001;

//parse json
app.use(express.json())

// cors is not working with vercel, so make a middleware with using npm cors which only accepts post requests

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', config.FRONTEND_URL);
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



//routes
app.use('/ai', airouter)
app.use('/sources', sourcesrouter)


app.get('/', (req, res) => {
  res.send('Express server of ResearchGPT');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} : http://localhost:${port}`);
});

export default app;