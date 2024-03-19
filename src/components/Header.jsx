/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  const toRegister = () => {
    navigate("/register")
  }

  console.log(localStorage.getItem("token"));
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            EveLOX
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">

                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">

                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <button
              onClick={toLogin}
              className="btn btn-outline-primary mx-3"
              type="submit"
            >
              Login
            </button>
            <button onClick={toRegister} className="btn btn-primary" type="submit">
              List Your Hall
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
