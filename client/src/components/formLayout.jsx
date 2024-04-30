import React from "react";

const FormLayout = ({ children, handleSubmit, title, subTitle }) => {
  return (
    <div
      className="px-3 py-6"
      style={{ background: "#90c3f0 no-repeat 100%" }}
    >
      <div className="w-full max-w-[486px] mx-auto">
        <h2 className="text-[28px] text-[#0f3d70] font-semibold my-3">
          Welcome to Digital Banking
        </h2>
        <form
          style={{ boxShadow: "0 1px 6px 0 #0000003d" }}
          className="bg-[#f3f3f1] py-5 px-4 border-[2px] border-[#ed780f_#f3f3f1_#f3f3f1]"
          onSubmit={handleSubmit}
        >
          <div className="pb-2 mb-3 border-b-[2px] border-slate-400">
            {title && (
              <h1 className="font-[500] text-[#0c0d0e] text-2xl">{title}</h1>
            )}
            {subTitle && <p className="mt-4 text-sm">{subTitle}</p>}
          </div>
          <div>{children}</div>
        </form>
      </div>
    </div>
  );
};

export default FormLayout;
