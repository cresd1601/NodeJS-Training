import { param, body } from 'express-validator';

// Model
import { PaymentType } from '@prisma/client';

const addUserPaymentMethod = [
  body('paymentType').custom((value) => {
    if (
      value !== PaymentType.APPLE_PAY &&
      value !== PaymentType.CREDIT_CARD &&
      value !== PaymentType.PAYPAL
    ) {
      throw new Error('This payment type is does not exist');
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }),
];

const deleteUserPaymentMethod = [param('paymentMethodId').isInt()];

export const paymentMethodsValidator = {
  addUserPaymentMethod,
  deleteUserPaymentMethod,
};
