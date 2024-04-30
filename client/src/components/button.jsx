import React from "react";

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} my-5 py-3 px-4 bg-[#b54e00] font-[600] text-lg rounded-md text-center text-[#ffffff] w-full`}
    >
      {title}
    </button>
  );
};

export default Button;
