// Libraries
import bodyParser from 'body-parser';
import express from 'express';

// Controller
import { resetPasswordController } from 'src/controllers/authentication';

// Validator
import { resetPasswordValidator } from 'src/validators/authentication';

const resetPasswordRouter = express.Router();

resetPasswordRouter
  .use(bodyParser.json())
  .post(
    '/',
    resetPasswordValidator.resetPassword,
    resetPasswordController.resetPassword
  );

export { resetPasswordRouter };
