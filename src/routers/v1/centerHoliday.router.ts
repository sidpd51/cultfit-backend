import express from 'express';
import { createCenterHolidayHandler } from '../../controllers/centerHoliday.controller';

const centerHolidayRouter = express.Router()


centerHolidayRouter.post('/', createCenterHolidayHandler);

export default centerHolidayRouter;