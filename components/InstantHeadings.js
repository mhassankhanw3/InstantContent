import React from "react";

export default function InstantHeadings({ title, desc }) {
  return (
    <div className="max-w-full w-[600px] mx-auto text-center sm:px-[0px] px-[10px] ">
      <h1 className="sm:text-[42px] text-[34px] leading-[42px] font-extrabold text-[#232C61]">
        {title}
      </h1>
      <p
        className={`text-[#6A6870] sm:mt-[26px] mt-[8px] sm:text-[26px] text-[22px] font-normal max-w-[100%] w-[500px] mx-auto`}
      >
        {desc}
      </p>
    </div>
  );
}
