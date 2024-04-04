import * as express from 'express';
import RewardsController from '../../controllers/rewards';

const rewardRoute = express.Router();

rewardRoute.post('/reward', [], RewardsController.insert);
rewardRoute.post('/rewards/bulk', [], RewardsController.insertMany);
rewardRoute.get('/rewards', [], RewardsController.getAll);

export default rewardRoute;
