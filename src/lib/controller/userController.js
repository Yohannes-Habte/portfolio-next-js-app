"use server";

import { revalidatePath } from "next/cache.js";
import { signIn, signOut } from "../auth.js";
import { connectToDb } from "../db/connection.js";
import { User } from "../model/userModel.js";
import bcrypt from "bcryptjs";

// =================================================================
// Create Account

// =================================================================
export const createAccount = async (previousState, formData) => {
  // const username = formData.get("username")
  // const email = formData.get("email")

  const { username, email, password, image } = Object.fromEntries(formData);

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists. Please try again" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });

    // Save to database
    await newUser.save();

    // Revalidate path in the frontend
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

// =================================================================
// User Login
// =================================================================
export const loginUser = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    connectToDb();
    await signIn("credentials", { username, password });
  } catch (err) {
    throw err;
  }
};

// =================================================================
// User Login with github
// =================================================================

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

// =================================================================
// User Logout
// =================================================================

export const handleLogout = async () => {
  "use server";
  await signOut();
};

// =================================================================
// Delete User Account
// =================================================================
export const deleteUserAccount = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.findByIdAndDelete(id);

    // Revalidate path in the frontend
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
