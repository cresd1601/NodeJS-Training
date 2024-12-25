// Libraries
import express from 'express';

// Routes
import { activateAccountRouter } from './activate-account.route';
import { resendActivateOTPRouter } from './resend-activate-otp.route';
import { resetPasswordRouter } from './reset-password.route';
import { signInRouter } from './sign-in.route';
import { signUpRouter } from './sign-up.route';

const authenticationRouter = express.Router();

// Authentication Router
authenticationRouter.use('/activate-account', activateAccountRouter);
authenticationRouter.use('/resend-activate-otp', resendActivateOTPRouter);
authenticationRouter.use('/reset-password', resetPasswordRouter);
authenticationRouter.use('/sign-in', signInRouter);
authenticationRouter.use('/sign-up', signUpRouter);

export { authenticationRouter };
