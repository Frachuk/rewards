import * as express from 'express';
import IndexController from '../controllers/index';
import accountRouter from './v1/accounts';
import rewardRoute from './v1/rewards';
import redemptionRouter from './v1/redemptions';

const router = express.Router();

router.get('/healthz', [], IndexController.healthzCheck);

router.use(accountRouter);
router.use(rewardRoute);
router.use(redemptionRouter);

export default router;
