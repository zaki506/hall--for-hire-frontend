import React from "react";
import Carsosel from "../components/Carousel";
import Info from "../components/Info";
import QuestionMark from "../assets/svgs/question-mark.svg";
import Megaphone from "../assets/svgs/megaphone.svg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Map from "../assets/map.jpeg";

const Home = () => {
  return (
    <>
      <Carsosel  />
      <div className="w-[80%] m-auto my-4">
        <div className="mb-5">
          <h2 className="fw-bold fs-1">
          Top Halls in San Francisco, CA
          </h2>
          <p className="lh-lg">
          San Francisco beckons anyone seeking halls with its unmatched aura for all the events. Navigating through the city, one finds a plethora of venues ranging from historic banquet spaces to modern halls with panoramic bay views. Whether you're in charge of a corporate summit or a dazzling social gala, San Francisco offers a venue tailored to your needs. Leveraging Tagvenue's intuitive search features makes finding and comparing these impressive halls seamless. Don't wait, just ensure your next occasion shines under the marvelous backdrop of San Francisco.
          </p>
        </div>
        <div className="row d-flex">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <Card
                  imgUrl="https://plus.unsplash.com/premium_photo-1673626578328-d72e1e75202b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGhhbGx8ZW58MHx8MHx8fDA%3D"
                  text="The community stanford"
                />
              </div>
              <div className="col-lg-6 ">
                <Card
                  imgUrl="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGhhbGx8ZW58MHx8MHx8fDA%3D"
                  text="Eastern Lions Socer Club"
                />
              </div>
              <div className="col-lg-6">
                <Card
                  imgUrl="https://images.unsplash.com/photo-1607128295148-ec1ddc314455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBoYWxsfGVufDB8fDB8fHww"
                  text="Centenary Corps"
                />
              </div>
              <div className="col-lg-6">
                <Card
                  imgUrl="https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmclMjBoYWxsfGVufDB8fDB8fHww"
                  text="Richmond union Bowling Club"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="card p-5 border-0 bg-light mb-2">
              <div class="card-body text-center">
                <p className="fs-3 fw-lighter">Used By Over</p>
                <h3 className="fs-1">500,000</h3>
                <p className="fs-3 fw-lighter">Really Smart Custom</p>
              </div>
            </div>

            <div class="card p-5 border-0 bg-light mb-2">
              <div class="card-body text-center">
                <p className="fs-6 fw-lighter">
                  "It was really easy to find a wide range of potential
                  locations, and I could contact many different venues with
                  ease. Tagvenue allowed me to be very dynamic when organising
                  my event. Would definitely use again!"
                </p>

                <p className="fs-6 fw-lighter">Sophie Ward - Birthday Party</p>
              </div>
            </div>

            <div class="card border-0">
              <div class="card-body text-center">
                <img src={Map} className="h-[40rem] object-cover" alt="map" />
              </div>
            </div>
            <div class="card p-6 border-0 bg-light mb-2 ">
              <div class="card-body text-center">

                <p className="fs-3 fw-lighter"> </p>
                <h3 className="fs-4  lh-lg" >People also search for</h3>
                <p className="fs-6 fw-lighter lh-lg">Banquet Halls in San Francisco, CA</p>
                <p className="fs-6 fw-lighter lh-lg">Ballrooms in San Francisco, CA</p>
                <p className="fs-6 fw-lighter lh-lg">Cheap Banquet Halls in San Francisco, CA</p>
                <p className="fs-6 fw-lighter lh-lg">Cheap Ballrooms in San Francisco, CA</p>
                
              </div>
            </div>

            <div class="card p-6 border-0 bg-light mb-1 h-[32rem]">
              <div class="card-body text-center">

                <h3 className="fs-4 me-[100px] lh-lg ">Halls in other cities</h3>
                <p className="fs-6 fw-lighter lh-lg">New York City</p>
                <p className="fs-6 fw-lighter 1h-lg">Los Angeles</p>
                <p className="fs-6 fw-lighter lh-lg">Chicago</p>
                <p className="fs-6 fw-lighter lh-lg">Houston</p>
                <p className="fs-6 fw-lighter lh-lg">Dallas</p>
                <p className="fs-6 fw-lighter lh-lg">Atlanta</p>
                <p className="fs-6 fw-lighter lh-lg">Philadelphia</p>
                <p className="fs-6 fw-lighter lh-lg">Miami</p>
                
              </div>
            </div>

            <div class="card p-5 border-0 bg-light mb-2">

              <div class="card-body text-center">
                <p className="fs-8 fw-lighter">
                  "Booking a hall in San Francisco requires some foresight, especially given the city's bustling calendar of annual events. It's advisable to book several months in advance, particularly if you're planning your event around the same time as major events like the Bay to Breakers, or Fleet Week. These popular events can significantly impact venue availability and prices.
                  Furthermore,the summer months, with their pleasant weather and loads of tourists, can be especially busy. If you're considering a date during these peak times, we recommend finalizing your venue at least 6 months in advance to ensure you secure your preferred location. However, you might find more availability and potentially better rates if you're flexible with your dates. Always check the city's event calendar to be informed and plan accordingly."
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
