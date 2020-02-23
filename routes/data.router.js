import { Router } from 'express';
import dataController from '../controllers/data.controller';
const router = Router();

router.get('/', async (req, res) => {
	await dataController.getData(req, res);
});

export default router;