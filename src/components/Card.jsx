import React from "react";

const Card = ({ imgUrl, text }) => {
  return (
    <>
      <div
        className="card opacity-70 hover:opacity-100"
        style={{
          width: "18rem",
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <div className="card-body">
          <p className="text-dark text-3xl">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
