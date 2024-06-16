"use client";

import React, { useState } from "react";
import "./TestimonialForm.scss";
import { createTestimonial } from "../../lib/controller/testimonialController.js";

const TestimonialForm = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  return (
    <section className="testimonial-form-wrapper">
      <h2 className="testimonial-form-title">Add Testimonial </h2>

      <form action={createTestimonial} className="testimonial-form">
        {/* Testimonial Image*/}
        <div className="input-container">
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="input-field"
          />
          <label htmlFor="frontendSkills" className="input-label">
            Testimonial Image
          </label>
          <span className="input-highlight"></span>
        </div>

        {/*Title*/}
        <div className="input-container">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="input-field"
          />
          <label htmlFor="title" className="input-label">
            Title
          </label>
          <span className="input-highlight"></span>
        </div>

        <button className="main-form-btn">Submit</button>
      </form>
    </section>
  );
};

export default TestimonialForm;
