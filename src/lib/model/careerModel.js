import mongoose from "mongoose";

const { Schema } = mongoose;

const careerSchema = new Schema(
  {
    mernStack: { type: String },
    lampStack: { type: String },
    additionalStack: { type: String },
    researchSkill: { type: String },
    managementSkill: { type: String },
    coreValue: { type: String },
    goal: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Career =
  mongoose.models?.Career || mongoose.model("Career", careerSchema);
