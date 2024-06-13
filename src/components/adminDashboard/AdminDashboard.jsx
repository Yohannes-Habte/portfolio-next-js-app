"use client";

import React, { useState } from "react";
import Sidebar from "../adminSidebar/Sidebar";
import AdminContent from "../adminContentDisplay/AdminContent";
import "./AdminDashboard.scss";

const AdminDashboard = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="admin-page-wrapper">
      <Sidebar active={active} setActive={setActive} />
      <AdminContent active={active} setActive={setActive} />
    </div>
  );
};

export default AdminDashboard;
