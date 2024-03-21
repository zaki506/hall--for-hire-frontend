import React from "react";

const Button = ({ cls, text, func, type }) => {
  return (
    <>
      <div>
        <button className={cls} onClick={func} type={type}>
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
