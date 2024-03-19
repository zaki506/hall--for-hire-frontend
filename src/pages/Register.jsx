import React, { useState } from "react";
import "../index.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      postcode: "",
      password: "",
    },

    onSubmit: async (values) => {
      await axios
        .post("http://localhost:8080/api/user/create", values)
        .then((res) => {
			console.log("res", res)
          toast.success(res?.data?.message)
		  setTimeout(() => {
			navigate("/")
		  }, 2000)
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  });

  return (
    <>
      <div className="container">
        <div className="row main">
          <div className="main-login main-center">
            <h5>
              Please fill out the following form to create a user account.
            </h5>

            <form onSubmit={myFormik.handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  onChange={myFormik.handleChange}
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email Address"
                  onChange={myFormik.handleChange}
                />
              </div>

              <div>
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="number"
                  className="form-control"
                  name="mobile"
                  placeholder="Your Mobile Number"
                  onChange={myFormik.handleChange}
                />
              </div>

              <div>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Your Address"
                  onChange={myFormik.handleChange}
                />
              </div>

              <div>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder="Your City"
                  onChange={myFormik.handleChange}
                />
              </div>

              <div>
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  placeholder="Your State"
                  onChange={myFormik.handleChange}
                />
              </div>

              <div>
                <label htmlFor="postcode">Postcode:</label>
                <input
                  type="number"
                  className="form-control"
                  name="postcode"
                  placeholder="Your Postcode"
                  onChange={myFormik.handleChange}
                />
              </div>

              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="At least 6 characters"
                  onChange={myFormik.handleChange}
                />
              </div>
              <div>
                <input
                  className="btn btn-primary my-2"
                  type="submit"
                  value="Register Now"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Register;
