"use client";

import React from "react";
import "./AdminContent.scss";
import ListOfSkillsForm from "../skillsForm/ListOfSkillsForm";
import TestimonialForm from "../portfolioForm/TestimonialForm";
import MainForm from "../mainform/MainForm";
import AboutForm from "../aboutForm/AboutForm";
import ProductsPage from "@/app/admin/(users)/users/page";

const AdminContent = ({ active }) => {
  return (
    <article className="contents-wrapper">
      {active === 1 && <MainForm />}

      {active === 2 && <AboutForm />}

      {active === 3 && <ListOfSkillsForm />}

      {active === 4 && <TestimonialForm />}

      {/* {active === 5 && <ProductsPage />} */}
    </article>
  );
};

export default AdminContent;
