// Libraries
import bodyParser from 'body-parser';
import passport from 'passport';
import express from 'express';

// Controller
import { profileController } from 'src/controllers/users';

// Validator
import { profileValidator } from 'src/validators/users';

const profileRouter = express.Router();

profileRouter.get(
  '/profile',
  passport.authenticate('jwt-auth', { session: false }),
  profileController.getUserProfile
);

profileRouter
  .use(bodyParser.json())
  .patch(
    '/profile',
    passport.authenticate('jwt-auth', { session: false }),
    profileValidator.updateUserProfile,
    profileController.updateUserProfile
  );

export { profileRouter };
