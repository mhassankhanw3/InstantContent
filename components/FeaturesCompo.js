import React from "react";

export default function FeaturesCompo({
  head,
  title,
  desc,
  img_1,
  img_2,
  css,
}) {
  return (
    <div className={`${css} max-w-[100%] w-[900px] mx-auto py-0 `}>
      <div>
        <img className="w-[400px]" src={img_2} alt="" />
      </div>
      <div className=" max-w-[100%] w-[430px] ">
        <div className="flex items-center justify-start">
          <img src={img_1} alt="" />
          <h2 className="text-transparent text-[20px] font-semibold font-Mulish bg-clip-text bg-gradient-to-l from-[#08D586] via-[#03C6C2] to-[#02B9EC] ml-[9px]">
            {head}
          </h2>
        </div>
        <h3 className="my-[18px] text-[#232C61] text-[23px] font-extrabold font-Mulish ">
          {title}
        </h3>
        <p className="text-[23px] text-[#525252] font-normal font-Mulish ">
          {desc}
        </p>
      </div>
    </div>
  );
}
