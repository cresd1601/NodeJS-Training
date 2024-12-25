// Libraries
import bodyParser from 'body-parser';
import passport from 'passport';
import express from 'express';

// Controller
import { cartItemsController } from 'src/controllers/users';

// Validator
import { cartItemsValidator } from 'src/validators/users';

const cartItemsRouter = express.Router();

cartItemsRouter.get(
  '/cart-items',
  passport.authenticate('jwt-auth', { session: false }),
  cartItemsController.getUserCartItems
);

cartItemsRouter
  .use(bodyParser.json())
  .post(
    '/cart-items',
    passport.authenticate('jwt-auth', { session: false }),
    cartItemsValidator.addUserCartItem,
    cartItemsController.addUserCartItem
  );

cartItemsRouter
  .use(bodyParser.json())
  .patch(
    '/cart-items/:cartItemId',
    passport.authenticate('jwt-auth', { session: false }),
    cartItemsValidator.updateUserCartItem,
    cartItemsController.updateUserCartItem
  );

cartItemsRouter.delete(
  '/cart-items/:cartItemId',
  passport.authenticate('jwt-auth', { session: false }),
  cartItemsController.deleteUserCartItem
);

export { cartItemsRouter };
