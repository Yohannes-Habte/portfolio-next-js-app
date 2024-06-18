import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// export const uploadImageToCloudinary = async (file) => {
//   console.log("file=", file)
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(file.path, (error, result) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(result.url);
//       }
//     });
//   });
// };

export const uploadFile = async (file) => {
  try {
    // Ensure file is a string before passing it to upload function
    const result = await cloudinary.uploader.upload(file);
    console.log("Upload successful:", result);
    return result;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};
