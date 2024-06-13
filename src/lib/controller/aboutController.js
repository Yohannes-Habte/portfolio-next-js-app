"use server";

import { revalidatePath } from "next/cache.js";
import { connectToDb } from "../db/connection.js";
import { About } from "../model/aboutModel.js";

// =================================================================
// Create content from skills form
// =================================================================

export const createAboutMe = async (formData) => {
  const {
    yearsOfProfessionalExperience,
    numberOfCompletedProjects,
    yearsOfSocialServiceExperience,
    professionalExperienceDescription,
    socialServiceDescription,
    projectsDescription,
    personalMission,
    personalVision,
  } = Object.fromEntries(formData);
  try {
    connectToDb();

    const aboutMe = new About({
      yearsOfProfessionalExperience,
      numberOfCompletedProjects,
      yearsOfSocialServiceExperience,
      professionalExperienceDescription,
      socialServiceDescription,
      projectsDescription,
      personalMission,
      personalVision,
    });

    await aboutMe.save();

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
