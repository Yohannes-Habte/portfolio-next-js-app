import mongoose from "mongoose";

const { Schema } = mongoose;

const skillSchema = new Schema(
  {
    frontendSkills: { type: String, required: true },
    backendSkills: { type: String, required: true },
    managementSkills: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Skill =
  mongoose.models?.Skill || mongoose.model("Skill", skillSchema);
