"use client";
import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ active, setActive }) => {
  return (
    <ul className="sidebar-wrapper">
      <li
        onClick={() => setActive(1)}
        className={
          active === 1 ? "active-sidebar-item" : "passive-sidebar-item"
        }
      >
        {" "}
        Add Profession
      </li>
      <li
        onClick={() => setActive(2)}
        className={
          active === 2 ? "active-sidebar-item" : "passive-sidebar-item"
        }
      >
        Add About Me{" "}
      </li>
      <li
        onClick={() => setActive(3)}
        className={
          active === 3 ? "active-sidebar-item" : "passive-sidebar-item"
        }
      >
        Add Skills
      </li>
      <li
        onClick={() => setActive(4)}
        className={
          active === 4 ? "active-sidebar-item" : "passive-sidebar-item"
        }
      >
        Add Testimonial
      </li>
      {/* <li onClick={() => setActive(5)}>Add User</li> */}
    </ul>
  );
};

export default Sidebar;
