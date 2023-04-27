import React from "react";

export default function AdsCompo({ title, desc, img, css }) {
  return (
    <div className={`linear rounded-[8px] ${css} py-[3px] px-[3px] pt-[3.4px] `}>
      <div className="bg-white py-[20px] max-w-[100%] w-[355px] px-[18px] rounded-[6px] flex items-center">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="ml-[10px]">
          <h3 className="text-[20px] font-semibold text-[#232C61] ">{title}</h3>
          <p className="text-[#6A6870] font-normal text-[16px] ">{desc}</p>
        </div>
      </div>
    </div>
  );
}
