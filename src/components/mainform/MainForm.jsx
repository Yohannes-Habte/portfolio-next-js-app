"use client";
import React, { useState } from "react";
import "./MainForm.scss";
import { useFormState } from "react-dom";
import { createCareer } from "../../lib/controller/careerController.js";

const initialState = {
  mernStack: "",
  lampStack: "",
  additionalStack: "",
  researchSkill: "",
  managementSkill: "",
  coreValue: "",
  goal: "",
};
const MainForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [image, setImage] = useState("");
  const [state, formAction] = useFormState(createCareer, undefined);

  const {
    mernStack,
    lampStack,
    additionalStack,
    researchSkill,
    managementSkill,
    coreValue,
    goal,
  } = formData;

 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="main-form-wrapper">
      <h2 className="main-form-title"> Fill out the form </h2>
      <form action={formAction} className="main-form">
        <div className="inputs-wrapper">
          {/* MERN Stack */}
          <div className="input-container">
            <input
              type="text"
              name="mernStack"
              value={mernStack}
              onChange={handleChange}
              placeholder="MERN Stack"
              className="input-field"
            />
            <label htmlFor="mernStack" className="input-label">
              MERN Stack
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* LAMP Stack */}
          <div className="input-container">
            <input
              type="text"
              name="lampStack"
              value={lampStack}
              onChange={handleChange}
              placeholder="LAMP Stack"
              className="input-field"
            />
            <label htmlFor="lampStack" className="input-label">
              LAMP Stack
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Additional Stack */}
          <div className="input-container">
            <input
              type="text"
              name="additionalStack"
              value={additionalStack}
              onChange={handleChange}
              placeholder="Additional Stack"
              className="input-field"
            />
            <label htmlFor="additionalStack" className="input-label">
              Additional Stack
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Research Skill */}
          <div className="input-container">
            <input
              type="text"
              name="researchSkill"
              value={researchSkill}
              onChange={handleChange}
              placeholder="Research Skill"
              className="input-field"
            />
            <label htmlFor="researchSkill" className="input-label">
              Research Skill
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Management Skill */}
          <div className="input-container">
            <input
              type="text"
              name="managementSkill"
              value={managementSkill}
              onChange={handleChange}
              placeholder="Management Skill"
              className="input-field"
            />
            <label htmlFor="managementSkill" className="input-label">
              Management Skill
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Core Values */}
          <div className="input-container">
            <input
              type="text"
              name="coreValue"
              value={coreValue}
              onChange={handleChange}
              placeholder="Core Value"
              className="input-field"
            />
            <label htmlFor="coreValue" className="input-label">
              Personal Core Value
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Personal Goal */}
          <div className="input-container">
            <input
              type="text"
              name="goal"
              value={goal}
              onChange={handleChange}
              placeholder="Personal Goal"
              className="input-field"
            />
            <label htmlFor="goal" className="input-label">
              Personal Goals
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Personal Goal */}
          <div className="input-container">
            <input
              type="file"
              name="testimonialImage"
              onChange={(e) => setImage(e.target.files[0])}
              className="input-field"
            />
            <label htmlFor="testimonialImage" className="input-label">
              Testimonial
            </label>
            <span className="input-highlight"></span>
          </div>
        </div>

        <button className="main-form-btn">Submit</button>
        {state?.error && <p> {state.error} </p>}
      </form>
    </section>
  );
};

export default MainForm;
