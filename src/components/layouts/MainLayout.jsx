import React from "react";
import "./layout.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
