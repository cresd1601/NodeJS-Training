// Libraries
import bodyParser from 'body-parser';
import passport from 'passport';
import express from 'express';

// Controller
import { paymentMethodsController } from 'src/controllers/users';

// Validator
import { paymentMethodsValidator } from 'src/validators/users';

const paymentMethodsRouter = express.Router();

paymentMethodsRouter.get(
  '/payment-methods',
  passport.authenticate('jwt-auth', { session: false }),
  paymentMethodsController.getUserPaymentMethods
);

paymentMethodsRouter
  .use(bodyParser.json())
  .post(
    '/payment-methods',
    passport.authenticate('jwt-auth', { session: false }),
    paymentMethodsValidator.addUserPaymentMethod,
    paymentMethodsController.addUserPaymentMethod
  );

paymentMethodsRouter.delete(
  '/payment-methods/:paymentMethodId',
  passport.authenticate('jwt-auth', { session: false }),
  paymentMethodsValidator.deleteUserPaymentMethod,
  paymentMethodsController.deleteUserPaymentMethod
);

export { paymentMethodsRouter };
