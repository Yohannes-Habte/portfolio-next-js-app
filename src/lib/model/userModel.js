import mongoose from "mongoose";


const { Schema } = mongoose;

// User schema
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String, default: "https://i.ibb.co/4pDNDk1/avatar.png" },
    isAdmin: { type: Boolean, default: false },
    comments: [],
    agree: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
