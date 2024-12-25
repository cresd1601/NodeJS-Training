import { body } from 'express-validator';

const addUserCartItem = [
  // Body
  body('productId').isInt(),
  body('quantity').isInt({ min: 1 }),
];

const updateUserCartItem = [
  // Body
  body('quantity').isInt({ min: 1 }),
];

export const cartItemsValidator = {
  addUserCartItem,
  updateUserCartItem,
};
