import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="position-relative">
        <div className="position-absolute fint-hall">
          <div className="row align-items-center">
            <div className="col-sm-2 d-flex align-items-center justify-content-center">
              <i class="bx bx-search"></i>
              <p className="m-0 ms-2">Find a Hall</p>
            </div>
            <div className="col-sm-2 p-0">
              <input
                type="text"
                className="form-control rounded-0 border-0 border-end"
                placeholder="Suburb"
              />
            </div>
            <div className="col-sm-2 p-0">
              <select
                className="form-select rounded-0 border-0 border-end"
                style={{ padding: "8.1px" }}
                aria-label="Default select example">

                <option selected>City</option>
                <option value="1">Delhi</option>
                <option value="2">Banglore</option>
                <option value="3">Mumbai</option>
              </select>
            </div>
            <div className="col-sm-2 p-0">
              <select
                className="form-select rounded-0 border-0 border-end"
                style={{ padding: "8.1px" }}
                aria-label="Default select example"
              >
                <option selected>Number of Guests</option>
                <option value="1">500+</option>
                <option value="2">1000+</option>
                <option value="3">2000+</option>
              </select>
            </div>
            <div className="col-sm-2 p-0">
              <select
                className="form-select rounded-0 border-0 border-end"
                style={{ padding: "8.1px" }}
                aria-label="Default select example"
              >
                <option selected>Purpose</option>
                <option value="1">Birthday Party</option>
                <option value="2">Marriage</option>
                <option value="3">Meeting</option>
              </select>
            </div>
            <div className="col-sm-2 p-0">
              <button className="btn custom-btn">
                <i class="bx bx-chevron-right"></i>Search Halls
              </button>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="1.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1> HALLS FOR HIRE</h1>
                <p>A Comprehensive Directory of Community Venues</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="2.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1> HALLS FOR HIRE</h1>
                <p>A Comprehensive Directory of Community Venues</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="3.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1> HALLS FOR HIRE</h1>
                <p>A Comprehensive Directory of Community Venues</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
