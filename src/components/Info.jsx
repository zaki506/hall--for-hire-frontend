import React from "react";

const Info = ({icon, text}) => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container d-flex justify-content-center align-items-center">
          <div>
            <img src={icon} alt="" />
          </div>
          <div>
            <p className="lead">
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
