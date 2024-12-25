import { body } from 'express-validator';

const resetPassword = [body('email').isEmail().normalizeEmail()];

export const resetPasswordValidator = { resetPassword };
