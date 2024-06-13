import mongoose from "mongoose";

const { Schema } = mongoose;

const aboutSchema = new Schema(
  {
    yearsOfProfessionalExperience: { type: Number, required: true },
    numberOfCompletedProjects: { type: Number, required: true },
    yearsOfSocialServiceExperience: { type: Number, required: true },
    professionalExperienceDescription: { type: String, required: true },
    socialServiceDescription: { type: String, required: true },
    projectsDescription: { type: String, required: true },
    personalMission: { type: String, required: true },
    personalVision: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const About =
  mongoose.models?.About || mongoose.model("About", aboutSchema);
