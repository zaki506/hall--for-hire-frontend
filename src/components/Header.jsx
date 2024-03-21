import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
// import Login from "./Login";

const Header = () => {
  return (
    <>
      <header className="bg-dark p-2">
        <div className="container-fluid">
          <div className="row py-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-sm-3">
                <span className="text-white">LOGO</span>
              </div>
              <Link to={"/register"}>
                <div className="">
                  <Button cls="btn btn-primary" text="List your hall" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
