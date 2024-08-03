import express from 'express';
import airouter from './routes/ai'
import sourcesrouter from './routes/sources';
import config from './utils/env';
import expressAsyncHandler from 'express-async-handler';
import cors from 'cors';


const app = express();
const port = config.PORT || 3001;

//parse json
app.use(express.json())

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions))

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