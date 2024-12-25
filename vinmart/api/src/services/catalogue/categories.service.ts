// Libraries
import { StatusCodes } from 'http-status-codes';

// Model
import { Category } from '@prisma/client';

// Prisma
import prisma from 'src/prisma';

type ParsedCategory = Category & { image: string };

interface ICreateCategoryParameter {
  name: string;
  image: Express.Multer.File;
}

interface IGetCategoryListReturn {
  code: number;
  data: { categories: ParsedCategory[] };
}

interface ICreateCategoryReturn {
  code: number;
  data: ParsedCategory | { errors?: IError[] };
}

interface IError {
  value: string;
  msg: string;
  param: string;
  location: string;
}

const getCategoryList = async (): Promise<IGetCategoryListReturn> => {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      image: { select: { url: true } },
    },
  });

  const parsedCategories = categories.map((category) => ({
    id: category.id,
    name: category.name,
    createdAt: category.createdAt,
    updatedAt: category.updatedAt,
    image: category!.image!.url,
  }));

  return {
    code: StatusCodes.OK,
    data: { categories: parsedCategories },
  };
};

const createCategory = async (
  params: ICreateCategoryParameter
): Promise<ICreateCategoryReturn> => {
  const category = await prisma.category.findFirst({
    where: { name: params.name },
  });

  if (!!category) {
    const errors: IError[] = [
      {
        value: params.name,
        msg: 'Name already registered',
        param: 'name',
        location: 'body',
      },
    ];

    return {
      code: StatusCodes.CONFLICT,
      data: { errors },
    };
  } else {
    const newCategory = await prisma.category.create({
      data: { name: params.name },
    });

    const nameImage = await prisma.image.create({
      data: { categoryId: newCategory.id, url: params.image.path },
    });

    return {
      code: StatusCodes.OK,
      data: { ...newCategory, image: nameImage.url },
    };
  }
};

export const categoriesService = {
  getCategoryList,
  createCategory,
};
