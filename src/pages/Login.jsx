import React from "react";
import "../index.css";
import axios from "axios";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

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
        .post("http://localhost:8080/api/user/login", values)
        .then((res) => {
          console.log("res", res);
          toast.success(res?.data?.message);
          localStorage.setItem("token", res?.data?.user?.token);
          setTimeout(() => {
            navigate("/admin/dashboard");
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
      <Header />
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
              <Button cls="btn btn-primary my-2" text="Login" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default Login;
