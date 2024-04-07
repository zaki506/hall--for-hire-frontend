import React from "react";
import Carsosel from "../components/Carousel";
import Info from "../components/Info";
import QuestionMark from "../assets/svgs/question-mark.svg";
import Megaphone from "../assets/svgs/megaphone.svg";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Carsosel clsName="heroSlider h-[600px]" />
      <div className="w-[80%] m-auto my-4">
        <div className="mb-5">
          <h2 className="fw-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            eligendi ad debitis, vitae velit possimus
          </h2>
          <p className="lh-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            illo, praesentium blanditiis iure voluptatum voluptate neque,
            deleniti exercitationem tempore omnis non quis. Minima nemo illo
            nesciunt voluptas ut incidunt expedita. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Alias pariatur voluptate maiores amet
            impedit dolorum excepturi reiciendis fugiat assumenda illo harum
            eius, aliquid non repellat fugit suscipit? Ex, omnis at.
          </p>
        </div>
        <div className="row d-flex">
          <div className="col-lg-4">
            <Card
              imgUrl="https://hallsforhire.com.au/images/halls/410/hHJMFR9u.jpg?w=650&h=650"
              text="The community stanford"
            />
          </div>
          <div className="col-lg-4">
            <Card
              imgUrl="https://hallsforhire.com.au/images/halls/959/Xc9BEO3M.png?w=650&h=650"
              text="Eastern Lions Socer Club"
            />
          </div>
          <div className="col-lg-4">
            <div class="card p-5 border-0 bg-light mb-2">
              <div class="card-body text-center">
                <p className="fs-3 fw-lighter">Used By Over</p>
                <h3 className="fs-1">500,000</h3>
                <p className="fs-3 fw-lighter">Really Smart Custom</p>
              </div>
            </div>

            <div class="card p-5 border-0 bg-light">
              <div class="card-body text-center">
                <img src="" alt="map" />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <Card
              imgUrl="https://hallsforhire.com.au/images/halls/1575/8zfJn8eY.jpg?w=650&h=650"
              text="Centenary Corps"
            />
          </div>
          <div className="lg-col-4">
            <Card
              imgUrl="https://hallsforhire.com.au/images/halls/480/sBklYMDV.jpg?w=650&h=650"
              text="Richmond union Bowling Club"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
