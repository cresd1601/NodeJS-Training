// Libraries
import bodyParser from 'body-parser';
import passport from 'passport';
import express from 'express';

// Controller
import { favoriteItemsController } from 'src/controllers/users';

// Validator
import { favoriteItemsValidator } from 'src/validators/users';

const favoriteItemsRouter = express.Router();

favoriteItemsRouter.get(
  '/favorite-items',
  passport.authenticate('jwt-auth', { session: false }),
  favoriteItemsController.getUserFavoriteItems
);

favoriteItemsRouter
  .use(bodyParser.json())
  .post(
    '/favorite-items',
    passport.authenticate('jwt-auth', { session: false }),
    favoriteItemsValidator.addUserFavoriteItem,
    favoriteItemsController.addUserFavoriteItem
  );

favoriteItemsRouter.delete(
  '/favorite-items/:favoriteItemId',
  passport.authenticate('jwt-auth', { session: false }),
  favoriteItemsValidator.deleteUserFavoriteItem,
  favoriteItemsController.deleteUserFavoriteItem
);

export { favoriteItemsRouter };
