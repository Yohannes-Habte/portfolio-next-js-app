import mongoose from "mongoose";

const { Schema } = mongoose;

const testimonialSchema = new Schema(
  {
    image: { type: String },
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Testimonial =
  mongoose.models?.Testimonial ||
  mongoose.model("Testimonial", testimonialSchema);
