"use server";

import { revalidatePath } from "next/cache.js";
import { connectToDb } from "../db/connection.js";
import { Career } from "../model/careerModel.js";
import { uploadFile, } from "../cloudinary.js";

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

  const imageUrl = await uploadFile(image);

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
      image: imageUrl,
    });

    await career.save();

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
