import React from "react";
import logo from "../assets/header-logo.png";
// import Login from "./Login";

const Header = () => {
  return (
    <>
      <header className="bg-dark">
        <div className="container-fluid">
          <div className="row py-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-sm-3">
                <img src={logo} alt="evelox" className="header-logo" />
              </div>
              <div className="col-sm-3">
                <button onClick="" className="">login</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
