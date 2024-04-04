import * as express from 'express';
import AccountsController from '../../controllers/accounts';

const accountRouter = express.Router();

accountRouter.get('/account/:user_id', [], AccountsController.getById);

accountRouter.post('/account', [], AccountsController.insert);
accountRouter.post('/login', [], AccountsController.login);
accountRouter.post('/credits', [], AccountsController.updateCredits);

export default accountRouter;
