//https://blog.logrocket.com/how-to-set-up-node-typescript-express/
//https://github.com/hkirat/omegle/blob/master/backend/package.json


import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening PORT ${port} : https://localhost:${port}`);
});


//run the server -- npm run dev