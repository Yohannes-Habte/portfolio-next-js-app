"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "../db/connection.js";
import { Testimonial } from "../model/testimonialModel.js";
// =================================================================
// Create content from skills form
// =================================================================

export const createTestimonial = async (formData) => {
  const { title } = Object.fromEntries(formData);
  try {
    connectToDb();

    const testimonial = new Testimonial({
      title,
    });

    await testimonial.save();

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
