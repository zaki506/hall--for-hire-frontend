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
      <Carsosel />
      <div className="container text-center bg-slate-400">
        <Info icon={QuestionMark} text="This is a text one" />
      </div>

      <div className="w-[80%] m-auto d-flex justify-content-between my-4">
        <Card
          imgUrl="https://hallsforhire.com.au/images/halls/410/hHJMFR9u.jpg?w=650&h=650"
          text="The community stanford"
        />
        <Card
          imgUrl="https://hallsforhire.com.au/images/halls/959/Xc9BEO3M.png?w=650&h=650"
          text="Eastern Lions Socer Club"
        />
        <Card
          imgUrl="https://hallsforhire.com.au/images/halls/1575/8zfJn8eY.jpg?w=650&h=650"
          text="Centenary Corps"
        />
        <Card
          imgUrl="https://hallsforhire.com.au/images/halls/480/sBklYMDV.jpg?w=650&h=650"
          text="Richmond union Bowling Club"
        />
      </div>

      <div className="container text-center bg-slate-400">
        <Info icon={Megaphone} text="This is a for text two" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
