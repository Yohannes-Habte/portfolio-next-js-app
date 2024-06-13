"use server";

import { revalidatePath } from "next/cache.js";
import { connectToDb } from "../db/connection.js";
import { Skill } from "../model/skillsModel.js";

// =================================================================
// Create content from skills form
// =================================================================

export const createSkills = async (formData) => {
  const { frontendSkills, backendSkills, managementSkills } =
    Object.fromEntries(formData);
  try {
    connectToDb();

    const skills = new Skill({
      frontendSkills,
      backendSkills,
      managementSkills,
    });

    await skills.save();

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
