import React from "react";

const Button = ({ cls, text }) => {
  return (
    <>
      <div>
        <button className={cls}>{text}</button>
      </div>
    </>
  );
};

export default Button;
