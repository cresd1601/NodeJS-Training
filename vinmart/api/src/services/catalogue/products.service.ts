// Libraries
import { StatusCodes } from 'http-status-codes';

// Prisma
import prisma from 'src/prisma';
import { Product } from '@prisma/client';

export enum ORDER_DIRECTIONS {
  ASC = 'asc',
  DESC = 'desc',
}

interface IGetProductListParameter {
  limit?: string;
  page?: string;
  search?: string;
  sortBy?: string;
  orderBy?: string;
  categoryId?: string;
  minPrice?: string;
  maxPrice?: string;
}

interface ICreateProductParameter {
  name: string;
  description: string;
  price: string;
  quantityStock: string;
  categoryId: string;
  productUnitId: string;
  images: Express.Multer.File[];
}

interface IGetProductListReturn {
  code: number;
  data: {};
}

interface ICreateProductReturn {
  code: number;
  data: (Product & { images: string[] }) | { errors?: IError[] };
}

interface IError {
  value: string | number;
  msg: string;
  param: string;
  location: string;
}

interface IGetProductParameter {
  productId: string;
}

interface IGetProductReturn {
  code: number;
  data: {};
}

interface IGetProductReviewListParameter {
  productId: string;
}

interface IGetProductReviewListReturn {
  code: number;
  data: {};
}

interface ICreateProductReviewParameter {
  productId: string;
  userId: number;
  rating: number;
  description: string;
}

interface ICreateProductReviewReturn {
  code: number;
  data: {};
}

const getProductList = async (
  params: IGetProductListParameter
): Promise<IGetProductListReturn> => {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      quantityStock: true,
      createdAt: true,
      updatedAt: true,
      categoryId: true,
      productUnitId: true,
      images: { select: { url: true } },
    },
    skip:
      (params.limit &&
        params.page &&
        parseInt(params.limit) * (parseInt(params.page) - 1)) ||
      undefined,
    take: (params.limit && parseInt(params.limit)) || undefined,
    // Filter products by Category Id
    where: {
      name: {
        // Search products by name
        search: params.search,
      },
      categoryId:
        (params.categoryId && parseInt(params.categoryId)) || undefined,
      // Filter products by Min Price and Max Price
      price: {
        gte: (params.minPrice && parseInt(params.minPrice)) || undefined,
        lte: (params.maxPrice && parseInt(params.maxPrice)) || undefined,
      },
    },
    orderBy:
      // Add `sortBy` and `orderBy` (ascending order by default)
      (params.sortBy &&
        params.orderBy && [{ [params.sortBy]: params.orderBy }]) ||
      undefined,
  });

  const parsedProducts = products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantityStock: product.quantityStock,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    categoryId: product.categoryId,
    productUnitId: product.productUnitId,
    images: product.images.map((currentImage) => currentImage.url),
  }));

  return {
    code: StatusCodes.OK,
    data: { products: parsedProducts },
  };
};

const createProduct = async (
  params: ICreateProductParameter
): Promise<ICreateProductReturn> => {
  const product = await prisma.product.findFirst({
    where: { name: params.name },
  });

  const productUnit = await prisma.productUnit.findFirst({
    where: { id: parseInt(params.productUnitId) },
  });

  const category = await prisma.category.findFirst({
    where: { id: parseInt(params.categoryId) },
  });

  if (!!product) {
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
  } else if (!product && !!category && !!productUnit) {
    const newProduct = await prisma.product.create({
      data: {
        name: params.name,
        description: params.description,
        price: parseInt(params.price),
        quantityStock: parseInt(params.quantityStock),
        categoryId: parseInt(params.categoryId),
        productUnitId: parseInt(params.productUnitId),
      },
    });

    await prisma.image.createMany({
      data: params.images.map((image) => ({
        productId: newProduct.id,
        url: image.path,
      })),
    });

    return {
      code: StatusCodes.OK,
      data: {
        ...newProduct,
        images: params.images.map((image) => image.path),
      },
    };
  } else {
    const errors: IError[] = [];

    if (!category) {
      errors.push({
        value: params.categoryId,
        msg: 'Category does not exist',
        param: 'categoryId',
        location: 'body',
      });
    }

    if (!productUnit) {
      errors.push({
        value: params.productUnitId,
        msg: 'Product Unit does not exist',
        param: 'productUnitId',
        location: 'body',
      });
    }

    return {
      code: StatusCodes.BAD_REQUEST,
      data: { errors },
    };
  }
};

const getProduct = async (
  params: IGetProductParameter
): Promise<IGetProductReturn> => {
  const product = await prisma.product.findFirst({
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      quantityStock: true,
      createdAt: true,
      updatedAt: true,
      categoryId: true,
      productUnitId: true,
      images: { select: { url: true } },
    },
    // Find product by productId
    where: { id: parseInt(params.productId) },
  });

  if (!!product) {
    const images = product.images.map((currentImage) => currentImage.url);

    return {
      code: StatusCodes.OK,
      data: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantityStock: product.quantityStock,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        categoryId: product.categoryId,
        productUnitId: product.productUnitId,
        images,
      },
    };
  } else {
    const errors: IError[] = [
      {
        value: params.productId,
        msg: 'Item does not exist. It may have been deleted',
        param: 'productId',
        location: 'params',
      },
    ];

    return {
      code: StatusCodes.NOT_FOUND,
      data: { errors },
    };
  }
};

const getProductReviewList = async (
  params: IGetProductReviewListParameter
): Promise<IGetProductReviewListReturn> => {
  const product = await prisma.product.findFirst({
    // Find product by productId
    where: { id: parseInt(params.productId) },
  });

  if (!product) {
    const errors: IError[] = [
      {
        value: params.productId,
        msg: 'Item does not exist. It may have been deleted',
        param: 'productId',
        location: 'params',
      },
    ];

    return {
      code: StatusCodes.NOT_FOUND,
      data: { errors },
    };
  } else {
    const reviews = await prisma.review.findMany({
      where: { productId: parseInt(params.productId) },
    });

    const parsedReviews = await Promise.all(
      reviews.map(async (review) => {
        const user = await prisma.user.findFirst({
          select: {
            name: true,
            image: { select: { url: true } },
          },
          where: { id: review.userId },
        });

        return {
          id: review.id,
          rating: review.rating,
          description: review.description,
          createdAt: review.createdAt,
          updatedAt: review.updatedAt,
          userName: user!.name,
          userImage: user!.image!.url,
        };
      })
    );

    return {
      code: StatusCodes.OK,
      data: { reviews: parsedReviews },
    };
  }
};

const createProductReview = async (
  params: ICreateProductReviewParameter
): Promise<ICreateProductReviewReturn> => {
  const product = await prisma.product.findFirst({
    // Find product by productId
    where: { id: parseInt(params.productId) },
  });

  if (!product) {
    const errors: IError[] = [
      {
        value: params.productId,
        msg: 'Item does not exist. It may have been deleted',
        param: 'productId',
        location: 'params',
      },
    ];

    return {
      code: StatusCodes.NOT_FOUND,
      data: { errors },
    };
  } else {
    const newReview = await prisma.review.create({
      data: {
        productId: parseInt(params.productId),
        userId: params.userId,
        rating: params.rating,
        description: params.description,
      },
    });

    const user = await prisma.user.findFirst({
      select: {
        name: true,
        image: { select: { url: true } },
      },
      where: { id: params.userId },
    });

    return {
      code: StatusCodes.OK,
      data: {
        id: newReview.id,
        rating: newReview.rating,
        description: newReview.description,
        createdAt: newReview.createdAt,
        updatedAt: newReview.updatedAt,
        userName: user!.name,
        userImage: user!.image!.url,
      },
    };
  }
};

export const productsService = {
  getProductList,
  createProduct,
  getProductReviewList,
  createProductReview,
  getProduct,
};
