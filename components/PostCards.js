import React from "react";

export default function PostCards({ title, desc, img }) {
  return (
    <div className="bg-[#F8F8F8] p-[30px] max-w-[100%] w-[492px] rounded-[8px] border border-[#E5E5E5] sm:flex flex-col justify-center items-center mx-auto sm:mx-0 sm:my-[0px] my-[20px] ">
      <img className="w-[90px] h-[90px] mx-auto " src={img} alt="" />
      <h3 className="text-[#232C61] text-[23px] text-center font-extrabold mt-[30px] mb-[18px] ">
        {title}
      </h3>
      <p className="text-[20px] font-normal text-[#6A6870] text-center ">
        {desc}
      </p>
    </div>
  );
}
