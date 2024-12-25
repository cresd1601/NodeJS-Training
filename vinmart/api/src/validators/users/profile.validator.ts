import { body } from 'express-validator';

const updateUserProfile = [
  // Body
  body('email').isEmail().normalizeEmail(),
  body('phone').isMobilePhone('vi-VN'),
  body('name').isString(),
];

export const profileValidator = { updateUserProfile };
