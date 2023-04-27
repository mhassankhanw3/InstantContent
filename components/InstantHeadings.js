import React from "react";

export default function InstantHeadings({ title, desc }) {
  return (
    <div className="max-w-full w-[600px] mx-auto text-center">
      <h1 className="text-[42px] font-extrabold text-[#232C61]">{title}</h1>
      <p className="text-[#6A6870] mt-[26px] text-[26px] font-normal max-w-[100%] w-[500px] mx-auto">
        {desc}
      </p>
    </div>
  );
}
