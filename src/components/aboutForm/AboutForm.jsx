"use client";
import React, { useState } from "react";
import "./AboutForm.scss"
import { createAboutMe } from "../../lib/controller/aboutController.js";

const initialState = {
  yearsOfProfessionalExperience: "",
  numberOfCompletedProjects: "",
  yearsOfSocialServiceExperience: "",
  professionalExperienceDescription: "",
  socialServiceDescription: "",
  projectsDescription: "",
  personalMission: "",
  personalVision: "",
};

const AboutForm = () => {
  const [formData, setFormData] = useState(initialState);

  const {
    yearsOfProfessionalExperience,
    numberOfCompletedProjects,
    yearsOfSocialServiceExperience,
    professionalExperienceDescription,
    socialServiceDescription,
    projectsDescription,
    personalMission,
    personalVision,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  return (
    <section className="about-me-form-wrapper">
      <h2 className="about-me-form-title">Add About Me Information</h2>

      <form action={createAboutMe} className="about-me-form">
        <div className="inputs-wrapper">
          {/*   Years of Professional Experience*/}
          <div className="input-container">
            <input
              type="number"
              name="yearsOfProfessionalExperience"
              value={yearsOfProfessionalExperience}
              onChange={handleChange}
              placeholder="Professional Experience in Years"
              className="input-field"
            />
            <label
              htmlFor="yearsOfProfessionalExperience"
              className="input-label"
            >
              Years of Professional Experience
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Number of Completed Projects*/}
          <div className="input-container">
            <input
              type="number"
              name="numberOfCompletedProjects"
              value={numberOfCompletedProjects}
              onChange={handleChange}
              placeholder="Number of Completed Projects"
              className="input-field"
            />
            <label htmlFor="numberOfCompletedProjects" className="input-label">
              Number of Completed Projects
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Years of Social Service*/}
          <div className="input-container">
            <input
              type="number"
              name="yearsOfSocialServiceExperience"
              value={yearsOfSocialServiceExperience}
              onChange={handleChange}
              placeholder="Years of Social Service"
              className="input-field"
            />
            <label
              htmlFor="yearsOfSocialServiceExperience"
              className="input-label"
            >
              Years of Social Service
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Professional Experience Description*/}
          <div className="input-container">
            <input
              type="text"
              name="professionalExperienceDescription"
              value={professionalExperienceDescription}
              onChange={handleChange}
              placeholder="Professional Experience Description"
              className="input-field"
            />
            <label
              htmlFor="professionalExperienceDescription"
              className="input-label"
            >
              Professional Experience Description
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Social Service Description*/}
          <div className="input-container">
            <input
              type="text"
              name="socialServiceDescription"
              value={socialServiceDescription}
              onChange={handleChange}
              placeholder="Social Service Description"
              className="input-field"
            />
            <label htmlFor="socialServiceDescription" className="input-label">
              Social Service Description
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Projects Description*/}
          <div className="input-container">
            <input
              type="text"
              name="projectsDescription"
              value={projectsDescription}
              onChange={handleChange}
              placeholder="Projects Description"
              className="input-field"
            />
            <label htmlFor="projectsDescription" className="input-label">
              Projects Description
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Personal Mission*/}
          <div className="input-container">
            <input
              type="text"
              name="personalMission"
              value={personalMission}
              onChange={handleChange}
              placeholder="Personal Mission"
              className="input-field"
            />
            <label htmlFor="personalMission" className="input-label">
              Personal Mission
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Personal Vision*/}
          <div className="input-container">
            <input
              type="text"
              name="personalVision"
              value={personalVision}
              onChange={handleChange}
              placeholder="Personal Vision"
              className="input-field"
            />
            <label htmlFor="personalVision" className="input-label">
              Personal Vision
            </label>
            <span className="input-highlight"></span>
          </div>
        </div>

        <button className="main-form-btn">Submit</button>
      </form>
    </section>
  );
};

export default AboutForm;
