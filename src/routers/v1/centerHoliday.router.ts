import express from 'express';
import { createCenterHolidayHandler, destroyCenterHolidayHandler } from '../../controllers/centerHoliday.controller';
import { validateRequetBody } from '../../validators';
import { createHoliday } from '../../validators/holiday';

const centerHolidayRouter = express.Router()


centerHolidayRouter.post('/', validateRequetBody(createHoliday), createCenterHolidayHandler);
centerHolidayRouter.delete('/:id', destroyCenterHolidayHandler);

export default centerHolidayRouter;