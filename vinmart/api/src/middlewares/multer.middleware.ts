import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({ cloudinary });

const createCategory = multer({ storage }).single('image');

const createProduct = multer({ storage }).array('images');

const updateUserAvatar = multer({ storage }).single('image');

export const multerUploader = {
  updateUserAvatar,
  createCategory,
  createProduct,
};
