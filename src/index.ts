import * as express from 'express';
import * as dotenv from 'dotenv';
import { logger } from './logger/logger';
import * as cors from 'cors';
import { mainRoute } from './routers/router';

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const PORT: number = Number(process.env.PORT) || 3001;

// public route
app.use('/main', mainRoute);

app.listen(PORT, () => {
  logger.info(`Server starting on ${PORT} port: http://localhost:${PORT}`);
});
