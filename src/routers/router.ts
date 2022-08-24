import * as express from 'express';
import { mainRouter } from '../controllers/mainRouter';
import { Request, Router, Response } from 'express';

export const mainRoute: Router = express.Router();

mainRoute.get('/', async (req: Request, res: Response) => {
  await mainRouter.mainRout(req, res);
});
