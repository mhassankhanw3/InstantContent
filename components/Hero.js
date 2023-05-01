import React from "react";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Hero() {
  return (
    <div className="bubble ">
      <div className="sm:px-[0px] px-[20px] max-w-[100%] sm:w-[550px] mx-auto sm:mt-[80px] mt-[0px] ">
        <div className="mx-auto sm:px-[0px] px-[10px] max-w-[100%]  text-center mt-[60px] w-[550px] ">
          <h1 className="text-[#232C61] leading-[50px] text-center sm:text-[42px] text-[38px] font-bold font-Mulish ">
            Generate instant{" "}
            <span className="text-[#24BF99] text-center font-bold font-Mulish ">
              Content
            </span>
            <p className="flex items-center justify-center text-[#232C61] text-center font-bold font-Mulish ">
              with AI.
              <img
                className="w-[40px] h-[40px]  ml-[10px]"
                src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/magic-wand-QTr5yhMaXoKhZsW.png"
                alt=""
              />
            </p>
          </h1>{" "}
          {/* <div className="flex items-center justify-center"> */}
          {/* </div> */}
          <p className="text-[#6A6870] sm:text-[26px] text-[23px] sm:my-[30px] my-[15px] max-w-[100%] sm:px-[0px] px-[20px] font-Mulish font-normal ">
            Begin the magic by creating extraordinary content with Artificial
            Intelligence, Easily.{" "}
          </p>
        </div>
        <div className=" bg-gradient-to-l from-[#08D586] via-[#03C6C2] to-[#02B9EC] hover:bg-gradient-to-l hover:from-[#02B9EC] hover:via-[#03C6C2] hover:to-[#08D586] hover:bg-[#9ca3af] transition-all text-[18px] cursor-pointer sm:mt-[20px] mt-[30px] py-[10px] text-white rounded-[6px] max-w-[100%] w-[90%] sm:w-[200px] mx-auto text-center flex items-center justify-center">
          <Link href="/" legacyBehavior>
            <a
              className=" flex items-center justify-center font-bold font-Mulish text-[18px] "
              href="/"
            >
              Get Started <ArrowRightOutlined style={{ marginLeft: "8px" }} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
