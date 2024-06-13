"use client";

import React, { useState } from "react";
import "./ListOfSkillsForm.scss";
import { createSkills } from "../../lib/controller/skillController.js";

const initialState = {
  frontendSkills: "",
  backendSkills: "",
  managementSkills: "",
};

const ListOfSkillsForm = () => {
  const [formData, setFormData] = useState(initialState);

  const { frontendSkills, backendSkills, managementSkills } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  return (
    <section className="skills-form-wrapper">
      <h2 className="skills-form-title">Add Skills</h2>

      <form action={createSkills} className="skills-form">
        {/* Frontend skills*/}
        <div className="input-container">
          <input
            type="tex"
            name="frontendSkills"
            value={frontendSkills}
            onChange={handleChange}
            placeholder="Frontend skills"
            className="input-field"
          />
          <label htmlFor="frontendSkills" className="input-label">
            Frontend skills
          </label>
          <span className="input-highlight"></span>
        </div>

        {/* Backend skills*/}
        <div className="input-container">
          <input
            type="text"
            name="backendSkills"
            value={backendSkills}
            onChange={handleChange}
            placeholder="Backend skills"
            className="input-field"
          />
          <label htmlFor="backendSkills" className="input-label">
            Backend skills
          </label>
          <span className="input-highlight"></span>
        </div>

        {/* Management skills*/}
        <div className="input-container">
          <input
            type="text"
            name="managementSkills"
            value={managementSkills}
            onChange={handleChange}
            placeholder="Management skills"
            className="input-field"
          />
          <label htmlFor="managementSkills" className="input-label">
            Management skills
          </label>
          <span className="input-highlight"></span>
        </div>

        <button className="main-form-btn">Submit</button>
      </form>
    </section>
  );
};

export default ListOfSkillsForm;
