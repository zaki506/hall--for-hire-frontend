
// import React, { useState } from "react";

import axios from "axios";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const myFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      await axios
        .post("http://localhost:3001/api/user/login", values)
        .then((res) => {
          console.log("res", res);
          toast.success(res?.data?.message);
          localStorage.setItem("token", res?.data?.user?.token);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          console.log("err", err);
          toast.error(err?.response?.data?.message);
        });
    },
  });

  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <div className="w-50">
          <form onSubmit={myFormik.handleSubmit}>
            <div>
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                id="name"
                value={myFormik.values.email}
                name="email"
                onChange={myFormik.handleChange}
              />
            </div>

            <div>
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                value={myFormik.values.password}
                onChange={myFormik.handleChange}
              />
            </div>

            <div>
              <input
                type="submit"
                className="btn btn-primary my-3"
                value={"Submit"}
              />
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Login;
