"use server";

import { revalidatePath } from "next/cache.js";
import { connectToDb } from "../db/connection.js";
import { Career } from "../model/careerModel.js";
import { uploadFile, uploadImageToCloudinary } from "../cloudinary.js";

// =================================================================
// Create content from skills form
// =================================================================

export const createCareer = async (previousState, formData) => {
  const {
    mernStack,
    lampStack,
    additionalStack,
    researchSkill,
    managementSkill,
    coreValue,
    goal,
    image,
  } = Object.fromEntries(formData);

  const fileName = image.name;

  const cloudinaryUrl =
    "https://res.cloudinary.com/your-cloud-name/image/upload/your-image.jpg";

  const filePath = `https://res.cloudinary.com/dpxacfxeq/image/upload/v1718626739/fv2nygr7nxohuh7shknr.webp`;


  // const filePath = image.path; // Extract path from file object
  // const imageUrl = await uploadFile(filePath);

  try {
    connectToDb();

    const career = new Career({
      mernStack,
      lampStack,
      additionalStack,
      researchSkill,
      managementSkill,
      coreValue,
      goal,
      image: imagePath,
      // image: imageUrl,
    });

    await career.save();

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
