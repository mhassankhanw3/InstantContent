import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function ResNavbar({ setToggle }) {
  return (
    <div className="max-w-[100%] w-[90%] bg-white absolute top-0 h-[100vh] p-[30px]   ">
      <div className="flex items-center justify-between ">
        <img
          src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/logo-rdRGl3IohDB36C0.png"
          alt=""
        />
        <CloseOutlined
          onClick={() => setToggle(false)}
          className="cursor-pointer font-bold text-[18px]"
        />
      </div>
      <div>
        <ul className="flex flex-col mt-[50px]  ">
          <Link href="/" legacyBehavior>
            <li className="my-[10px]">
              <a className="text-[#6A6870] font-semibold text-[16px]" href="/">
                Home
              </a>
            </li>
          </Link>
          <Link href="/" legacyBehavior>
            <li className="my-[10px]">
              <a className="text-[#6A6870] font-semibold text-[16px]" href="/">
                Ads
              </a>
            </li>
          </Link>
          <Link href="/" legacyBehavior>
            <li className="my-[10px]">
              <a className="text-[#6A6870] font-semibold text-[16px]" href="/">
                Content
              </a>
            </li>
          </Link>
          <Link href="/" legacyBehavior>
            <li className="my-[10px]">
              <a className="text-[#6A6870] font-semibold text-[16px]" href="/">
                Social Media Post
              </a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-col mt-[30px] max-w-[100%] w-[100%] ">
        <Link href="/" legacyBehavior>
          <a
            href="/"
            className="text-[#6A6870] font-semibold text-[16px] cursor-pointer "
          >
            Sign In
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a
            className="text-[#24BF99] text-[18px] font-semibold border-2 cursor-pointer border-[#24BF99] px-[40px] py-[8px] rounded-[6px] max-w-[100%] w-[100%] text-center mt-[10px] "
            href="/"
          >
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
}
