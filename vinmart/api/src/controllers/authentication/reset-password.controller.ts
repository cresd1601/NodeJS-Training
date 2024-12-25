// Libraries
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

// Service
import { resetPasswordService } from 'src/services/authentication';

const resetPassword = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }

    const result = await resetPasswordService.resetPassword({
      email: req.body.email,
    });

    res.status(result.code).json(result.data);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: (error as Error).message });
  }
};

export const resetPasswordController = {
  resetPassword,
};
