import express from 'express';
import airouter from './routes/ai'
import sourcesrouter from './routes/sources';
import config from './utils/env';
import expressAsyncHandler from 'express-async-handler';


const app = express();
const port = config.PORT || 3001;

//parse json
app.use(express.json())

//routes
app.use('/ai', expressAsyncHandler(airouter))
app.use('/sources', expressAsyncHandler(sourcesrouter))


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening PORT ${port} : http://localhost:${port}`);
});


//run the server -- npm run dev