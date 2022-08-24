import { Request, Response } from 'express';

class MainRouter {
  async mainRout(req: Request, res: Response) {
    res.send({
      name: 'gev',
    });
  }
}

export const mainRouter = new MainRouter();
