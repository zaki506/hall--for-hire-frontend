import React from "react";
import Button from "./Button";
// import Login from "./Login";

const Header = () => {
  return (
    <>
      <header className="bg-dark">
        <div className="container-fluid">
          <div className="row py-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-sm-3">
                <span className="text-white">LOGO</span>
              </div>
              <div className="col-sm-3">
                <Button cls="btn btn-primary" text="List your hall" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
