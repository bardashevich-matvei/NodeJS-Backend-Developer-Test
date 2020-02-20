import express from 'express';
import views from './views.router';
import data from './data.router';

const router = express.Router();

router.use('/', views);
router.use('api/', data);

export default router;