"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "../db/connection.js";
import { Testimonial } from "../model/testimonialModel.js";
import cloudinary from "../cloudinary.js";
// =================================================================
// Create content from skills form
// =================================================================

export const createTestimonial = async (formData) => {
  // Access title from form data
  const title = formData.get("title");

  // Access image file from form data
  const file = formData.get("image");
  const buffer = await file.arrayBuffer();
  console.log("buffer =", buffer)
  const uploadedResponse = await cloudinary.uploader.upload_stream(buffer);
  console.log("upload image =", uploadedResponse)
  try {
    connectToDb();

    const testimonial = new Testimonial({
      title,
      image: uploadedResponse,
    });

    await testimonial.save();

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
