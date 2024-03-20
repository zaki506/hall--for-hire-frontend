import React from "react";

const Button = ({ cls, text, func }) => {
  return (
    <>
      <div>
        <button className={cls} onClick={func}>{text}</button>
      </div>
    </>
  );
};

export default Button;
