// Libraries
import prisma from 'src/prisma';
import { StatusCodes } from 'http-status-codes';

// Utils
import { generatePassword } from 'src/utils/generatePassword.util';
import { generateHash } from 'src/utils/generateHash.util';

// Helpers
import { sendResetPassword } from 'src/helpers/authentication';

interface IResetPasswordParameter {
  email: string;
}

interface ICreateServiceReturn {
  code: number;
  data: { errors?: IResetPasswordError[] };
}

interface IResetPasswordError {
  value: string;
  msg: string;
  param: string;
  location: string;
}

const resetPassword = async (
  params: IResetPasswordParameter
): Promise<ICreateServiceReturn> => {
  const user = await prisma.user.findFirst({
    where: { email: params.email },
  });

  if (!user) {
    const errors: IResetPasswordError[] = [
      {
        value: params.email,
        param: 'email',
        msg: 'The email address you entered is not assigned to registered user.',
        location: 'body',
      },
    ];

    return {
      code: StatusCodes.BAD_REQUEST,
      data: { errors },
    };
  } else {
    const password: string = generatePassword(16);
    const { hash: hashedPassword } = generateHash(password);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    await sendResetPassword(user.email, password);

    return {
      code: StatusCodes.OK,
      data: {},
    };
  }
};

export const resetPasswordService = {
  resetPassword,
};
