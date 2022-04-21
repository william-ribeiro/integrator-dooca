import { Router } from 'express';

import { catalogRouter } from './catalog';

const routes = Router();

routes.use('/integrator', catalogRouter);

export default routes;
