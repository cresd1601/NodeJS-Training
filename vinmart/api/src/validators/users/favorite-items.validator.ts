import { param, body } from 'express-validator';

const addUserFavoriteItem = [
  // Body
  body('productId').isInt(),
];

const deleteUserFavoriteItem = [param('favoriteItemId').isInt()];

export const favoriteItemsValidator = {
  addUserFavoriteItem,
  deleteUserFavoriteItem,
};
