import { Router } from 'express';
import viewsController from '../controllers/views.controller';
const router = Router();

router.get('/', async (req, res) => {
	await viewsController.main(req, res);
});

export default router;