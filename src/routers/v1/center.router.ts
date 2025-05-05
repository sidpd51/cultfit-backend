import express from 'express';
import { createCenterHandler, destroyCenterHandler, getAllCentersHandler, getCenterByIdHandler, updateCenterHandler } from '../../controllers/center.controller';
const centerRouter = express.Router()

centerRouter.post('/', createCenterHandler);
centerRouter.get('/', getAllCentersHandler);
centerRouter.patch('/:id', updateCenterHandler);
centerRouter.get('/:id', getCenterByIdHandler);
centerRouter.delete('/:id', destroyCenterHandler);

export default centerRouter;