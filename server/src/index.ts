import express from 'express';
import airouter from './routes/ai'
import sourcesrouter from './routes/sources';
import config from './utils/env';
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
app.use('/ai', airouter)
app.use('/sources', sourcesrouter)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening PORT ${port} : http://localhost:${port}`);
});


//run the server -- npm run dev