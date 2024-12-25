// Libraries
import bodyParser from 'body-parser';
import passport from 'passport';
import express from 'express';

// Controller
import { addressesController } from 'src/controllers/users';

// Validator
import { addressesValidator } from 'src/validators/users';

const addressesRouter = express.Router();

addressesRouter.get(
  '/addresses',
  passport.authenticate('jwt-auth', { session: false }),
  addressesController.getUserAddresses
);

addressesRouter
  .use(bodyParser.json())
  .post(
    '/addresses',
    passport.authenticate('jwt-auth', { session: false }),
    addressesValidator.addUserAddress,
    addressesController.addUserAddress
  );

addressesRouter
  .use(bodyParser.json())
  .patch(
    '/addresses/:addressId',
    passport.authenticate('jwt-auth', { session: false }),
    addressesValidator.updateUserAddress,
    addressesController.updateUserAddress
  );

addressesRouter.delete(
  '/addresses/:addressId',
  passport.authenticate('jwt-auth', { session: false }),
  addressesValidator.deleteUserAddress,
  addressesController.deleteUserAddress
);

export { addressesRouter };
