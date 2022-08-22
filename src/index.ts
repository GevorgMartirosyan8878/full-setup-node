import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { logger } from './logger/logger';
import * as cors from 'cors';

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const PORT: number = Number(process.env.PORT) || 3001;

app.get('/', (req: Request, res: Response) => {
  const jsonObj = JSON.stringify({
    name: 'gev',
  });

  res.send(jsonObj);
});

app.get('/gev', (req: Request, res: Response) => {
  const jsonObj = JSON.stringify({
    name: 'jan',
  });

  res.send(jsonObj);
});

app.listen(PORT, () => {
  logger.info(
    `Server starting on ${PORT} port: http://localhost:${PORT}`
  );
});
