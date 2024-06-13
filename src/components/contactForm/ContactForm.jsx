"use client";
import React, { useState } from "react";
import "./ContactForm.scss";

const initialState = {
  fullName: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);

  const { fullName, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact-form-wrapper">
      <aside className="contact-sidebar">
        <h3 className="contact-sidebar-title"> {"Let's get in touch"} </h3>
        <ul className="contact-sidebar-ul">
          <li>Address</li>
          <li>Email</li>
          <li>Phone</li>
          <li>WhatsApp</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </aside>
      <form action="" className="contact-form">
        <h4>
          Got a question? I would love to hear from you. Send me a message and I
          will respond as soon as possible
        </h4>
        {/* Full name*/}
        <div className="inputs-wrapper ">
          <div className="input-container">
            <input
              type="tex"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              placeholder="Full Name (First name Last name)"
              className="input-field"
            />
            <label htmlFor="fullName" className="input-label">
              Full Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Email Address */}
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email address"
              className="input-field"
            />
            <label htmlFor="email" className="input-label">
              Email Address
            </label>
            <span className="input-highlight"></span>
          </div>
        </div>

        {/* Text Message*/}
        <div className="input-container">
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleChange}
            rows={8}
            cols={20}
            placeholder="Enter text message ..."
            className="input-field"
          ></textarea>

          <label htmlFor="managementSkills" className="input-label">
            Text Message
          </label>
          <span className="input-highlight"></span>
        </div>

        <button className="main-form-btn">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
