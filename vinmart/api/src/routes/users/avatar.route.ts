// Libraries
import bodyParser from 'body-parser';
import passport from 'passport';
import express from 'express';

// Controller
import { avatarController } from 'src/controllers/users';

// Middleware
import { multerUploader } from 'src/middlewares';

const avatarRouter = express.Router();

avatarRouter
  .use(bodyParser.json())
  .patch(
    '/avatar',
    passport.authenticate('jwt-auth', { session: false }),
    multerUploader.updateUserAvatar,
    avatarController.updateUserAvatar
  );

export { avatarRouter };
