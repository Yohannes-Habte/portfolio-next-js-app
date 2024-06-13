import mongoose from "mongoose";

const { Schema } = mongoose;

const careerSchema = new Schema(
  {
    mernStack: { type: String, required: true },
    lampStack: { type: String, required: true },
    additionalStack: { type: String, required: true },
    researchSkill: { type: String },
    managementSkill: { type: String, required: true },
    coreValue: { type: String, required: true },
    goal: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Career =
  mongoose.models?.Career || mongoose.model("Career", careerSchema);
