/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import Button from "./Button";
const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: "https://images.pexels.com/photos/614512/pexels-photo-614512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: "https://images.pexels.com/photos/704822/pexels-photo-704822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "hrjb",
    bg: "https://images.pexels.com/photos/1098743/pexels-photo-1098743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const Carousel = () => {
  return (
    <>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="heroSlider h-[600px]"
      >
        {slides.map((slide, index) => {
          const { title, bg, btnText } = slide;
          return (
            <SwiperSlide
              className="h-full relative flex justify-center items-center"
              key={index}
            >
              <div className="z-40 text-white text-center"></div>
              <div className="absolute top-0 w-full h-full">
                <img className="object-cover h-full w-full" src={bg} />
              </div>
              <div className="absolute w-full h-full bg-black/70"></div>
            </SwiperSlide>
          );
        })}
               
      </Swiper>
      <Button
        cls="btn btn-primary position-absolute top-5 z-1 right-10"
        text="List your halls"
      />
      <Button
        cls="btn btn-transparent text-white hover:bg-blue-700 position-absolute top-5 z-1 right-[200px]"
        text="Login"
      />
    </>
  );
};

export default Carousel;
