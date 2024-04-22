import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button"
import Header from "./Header"

const Carousel = () => {
  const inputCss = {
    outline: "none",
    border: "none",
    boxShadow: "none",
  };
  const slides = [
    {
      title: "Halls for Rent in San Francisco, CA",
      subHeading: "See a whole variety of hall venues ready to be booked",
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.515),rgba(0, 0, 0, 0.515)), url(https://t4.ftcdn.net/jpg/06/18/14/43/240_F_618144393_oAys6JEuxUcAOr5nbqkZ15sirOWrRiQi.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    {
      title: "Halls for Rent in San Francisco, CA",
      subHeading: "See a whole variety of hall venues ready to be booked",
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.515),rgba(0, 0, 0, 0.515)), url(https://t3.ftcdn.net/jpg/06/20/28/80/240_F_620288019_umlRr0TCxFpr7savrgm8htVeWmVqPozo.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    {
      title: "Halls for Rent in San Francisco, CA",
      subHeading: "See a whole variety of hall venues ready to be booked",
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.515),rgba(0, 0, 0, 0.515)), url(https://t3.ftcdn.net/jpg/06/20/28/80/240_F_620288019_umlRr0TCxFpr7savrgm8htVeWmVqPozo.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };
  return (
    <>
    <Header />
    <div className="slider-container">
    <Slider {...settings}>
        {slides.map((item) => {
          return (
            <div>
              <div
                style={item}
                className="p-[150px] d-flex justify-content-center align-items-center"
              >
                <div className="text-center">
                  <h1 className="fs-1 text-white mb-5">{item.title}</h1>
                  <p className="text-white mb-5 fs-3 fw-light">{item.subHeading}</p>
                  <div className="bg-white p-2">
                    <div className="row align-items-center">
                      <div className="col-4 border-end">
                        <p className="text-start">date</p>
                        <div className="d-flex align-items-center ">
                          <i class="bx bxs-calendar"></i>
                          <input
                            className="form-control border-bottom rounded-0"
                            style={inputCss}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-4">
                        <p className="text-start">Guest</p>
                        <div className="d-flex align-items-center ">
                          <i class="bx bx-user"></i>
                          <input
                            className="form-control border-bottom rounded-0"
                            style={inputCss}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <button className="btn btn-danger w-100 py-3">serach</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    </>
  );
};

export default Carousel;
