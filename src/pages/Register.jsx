/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Carousel from "../components/Carousel";

const Register = () => {
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
          <form>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
