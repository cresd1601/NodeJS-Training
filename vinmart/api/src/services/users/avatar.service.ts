// Libraries
import { StatusCodes } from 'http-status-codes';

// Prisma
import prisma from 'src/prisma';

interface IUpdateUserAvatarParameter {
  userId: number;
  userAvatar: Express.Multer.File;
}

interface IUpdateUserAvatarReturn {
  code: number;
  data: {};
}

const updateUserAvatar = async (
  params: IUpdateUserAvatarParameter
): Promise<IUpdateUserAvatarReturn> => {
  const userAvatar = await prisma.image.update({
    where: { userId: params.userId },
    data: { url: params.userAvatar.path },
  });

  return {
    code: StatusCodes.OK,
    data: { image: userAvatar.url },
  };
};

export const avatarService = {
  updateUserAvatar,
};
