import express from 'express';
import airouter from './routes/ai'
import sourcesrouter from './routes/sources';
import config from './utils/env';


const app = express();
const port = config.PORT || 3001;

//parse json
app.use(express.json())

//routes
app.use('/ai', airouter)
app.use('/sources', sourcesrouter)


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening PORT ${port} : https://localhost:${port}`);
});


//run the server -- npm run dev