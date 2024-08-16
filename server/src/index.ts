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
  origin: "https://researchgptai.vercel.app",
  methods: "POST",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


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