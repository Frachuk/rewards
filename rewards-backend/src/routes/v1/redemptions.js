import * as express from 'express';
import RedemptionsController from '../../controllers/redemptions';

const redemptionRouter = express.Router();

redemptionRouter.post('/redemption', [], RedemptionsController.insert);

redemptionRouter.get('/redemptions/user/:user_id', [], RedemptionsController.getByUserId);

export default redemptionRouter;
