import { AsyncLocalStorage } from 'async_hooks';
import { v4 } from 'uuid';

export default class UUIDIdentifier {
  static asyncLocalStorage = new AsyncLocalStorage();

  static requestIdMiddleware = (req, res, next) => {
    UUIDIdentifier.asyncLocalStorage.run(new Map(), () => {
      UUIDIdentifier.asyncLocalStorage.getStore().set('requestId', v4());
      next();
    });
  };

  static getStore = () => UUIDIdentifier.asyncLocalStorage.getStore();
}
