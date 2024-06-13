"use server";

import { revalidatePath } from "next/cache.js";
import { connectToDb } from "../db/connection.js";
import { Career } from "../model/careerModel.js";

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
  } = Object.fromEntries(formData);
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
    });

    await career.save();

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
