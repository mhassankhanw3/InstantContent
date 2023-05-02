import React from "react";
import twitter from "../../public/images/twitter.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import Steps from "./Steps";

export default function test() {
  return (
    <>
      <div className="max-w-[100%] px-[20px] w-[960px] flex flex-wrap flex-row items-start sm:justify-between justify-center mx-auto">
        <div className="max-w-[100%] md:w-[570px] sm-w-[280px] w-[450px] px-[10px] sm:text-start text-center">
          <h1 className="sm:text-[42px] text-[34px] text-[#232C61] font-extrabold font-Mulish ">
            Ad Copy
          </h1>
          <p className="sm:my-[30px] my-[15px] sm:text-[26px] text-[#6A6870] text-[22px] ">
            Instant Content is an AI writer that lets you automatically generate
            high-quality content for various use cases.
          </p>
          <div className="sm:mx-0 mx-auto bg-gradient-to-l from-[#08D586] via-[#03C6C2] to-[#02B9EC] hover:bg-gradient-to-l hover:from-[#02B9EC] hover:via-[#03C6C2] hover:to-[#08D586] hover:bg-[#9ca3af] transition-all text-[18px] cursor-pointer sm:mt-[20px] mt-[30px] py-[10px] text-white rounded-[6px] max-w-[100%] w-[100%] sm:w-[200px] text-center flex items-center justify-center">
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
        <div className="sm:block hidden">
          <img
            src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/herosection-e1TPjn9ZPQ6jYQ1.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-[150px]">
        <Steps />
      </div>
    </>
  );
}
