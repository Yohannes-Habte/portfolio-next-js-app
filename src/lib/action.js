"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./db/connection.js";
import { Post } from "./models.js";



// =================================================================
// Create Post
// =================================================================
export const addPost = async (previousState, formData) => {
  const { title, desc, userId, slug } = Object.fromEntries(formData);

  try {
    connectToDb();
    const post = new Post({
      title,
      desc,
      userId,
      slug,
    });

    // Save to database
    await post.save();

    // Revalidate path in the frontend
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

// =================================================================
// Delete Post
// =================================================================

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
