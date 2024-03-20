/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Carousel from "../components/Carousel";
import ReCAPTCHA from 'react-google-recaptcha'
import Button from "../components/Button";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

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
      <Carousel clsName="heroSlider h-[200px]" />
      <div className="container my-5 w-[70%] m-auto">
        <div className="bg-red-500 p-2 text-white">
          <h1>
            You only need to register if you have a venue to hire, to search for
            a space{" "}
            <a href="/" className="underline">
              click here.
            </a>
          </h1>
        </div>
        <div className="my-3">
          <p>
            Please fill out the following form to create a user account. This
            information is for administrative purposes only and{" "}
            <span className="font-semibold">will never be published </span>without your consent and will be
            used to manage your listing/s. Please use information that can
            easily be shared and recorded throughout your organisation.
          </p>
        </div>

        <div>

          <form onSubmit={myFormik.handleSubmit}>
            
          <div>
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                id="name"
                // value={}
                name="name"
                onChange={myFormik.handleChange}
              />
            </div>

            <div>
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                // value={}
                onChange={myFormik.handleChange}
              />
            </div>
            


            <div>
              <label>Phone</label>
              <input
                className="form-control"
                type="Number"
                id="phone"
                // value={}
                name="phone"
                onChange={myFormik.handleChange}
              />
            </div>

            <div>
              <label>Mobile</label>
              <input
                className="form-control"
                type="Number"
                id="mobile"
                name="mobile"
                // value={}
                onChange={myFormik.handleChange}
              />
            </div>
           


            <div>
              <label>Address</label>
              <input
                className="form-control"
                type="text"
                id="address"
                // value={}
                name="address"
                onChange={myFormik.handleChange}
              />
            </div>

            <div>
              <label>City</label>
              <input
                className="form-control"
                type="text"
                id="city"
                name="city"
                // value={}
                onChange={myFormik.handleChange}
              />
            </div>
           


            <div>
              <label>State</label>
              <input
                className="form-control"
                type="text"
                id="state"
                // value={}
                name="state"
                onChange={myFormik.handleChange}
              />
            </div>

            <div>
              <label>Postcode</label>
              <input
                className="form-control"
                type="number"
                id="postcode"
                name="postcode"
                // value={}
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
                // value={}
                onChange={myFormik.handleChange}
              />
            </div>

            <div>
              <label>Prove you're human</label>
              <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
            </div>


            <div>
              <Button cls="btn btn-primary my-2" text="Register Now" />
            </div>
            

          </form>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default Register;
