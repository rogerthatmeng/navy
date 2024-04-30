import React from "react";

const Input = ({ title, children, ...rest }) => {
  return (
    <div className="w-full cursor-pointer mb-5 input-wrapper relative">
      <label className="block mb-[6px] text-[#0c0d0e] font-[600] ">
        {title}
      </label>
      <input
        type="text"
        className={`p-2 w-full border-[2px] border-[#d3d3d4] text-sm rounded-md`}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
