import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="container">
        <Sidebar />
      </div>

      <div style={{ width: "83%", position: "realtive", left: "260px" }}>
        <Header />
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Layout;
