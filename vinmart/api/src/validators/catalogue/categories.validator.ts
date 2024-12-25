import { body } from 'express-validator';

const createCategory = [
  body('name').isString(),
  // body('image').isMimeType()
];

export const categoriesValidator = { createCategory };
