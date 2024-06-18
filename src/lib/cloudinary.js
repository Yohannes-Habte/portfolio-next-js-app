import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// export const uploadImageToCloudinary = async (file) => {

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
  const fileBuffer = await file.arrayBuffer();
  const mime = file.type;
  const encoding = "base64";
  const base64Data = Buffer.from(fileBuffer).toString("base64");
  const filePath = "data:" + mime + ";" + encoding + "," + base64Data;

  try {
    const result = await cloudinary.uploader.upload(filePath);
    return result.url;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};
