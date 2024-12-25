import { param, body } from 'express-validator';

const addUserAddress = [
  // Body
  body('recipientName').isString(),
  body('address').isString(),
  body('city').isString(),
  body('zipCode').isInt(),
  body('country').isString(),
  body('phone').isMobilePhone('vi-VN'),
  body('default').isBoolean(),
];

const updateUserAddress = [
  param('addressId').isInt(),
  // Body
  body('recipientName').isString(),
  body('address').isString(),
  body('city').isString(),
  body('zipCode').isInt(),
  body('country').isString(),
  body('phone').isMobilePhone('vi-VN'),
  body('default').isBoolean(),
];

const deleteUserAddress = [param('addressId').isInt()];

export const addressesValidator = {
  addUserAddress,
  updateUserAddress,
  deleteUserAddress,
};
