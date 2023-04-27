import React from "react";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";

// border border-black
export default function Navbar() {
  return (
    <nav className="flex flex-wrap bg-white items-center justify-between max-w-[100%] py-[20px] px-[50px] ">
      <div>
        <img
          className="cursor-pointer"
          src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/logo-rdRGl3IohDB36C0.png"
          alt=""
        />
      </div>
      <div>
        <ul className="sm:flex lg:flex md:hidden flex-wrap items-center hidden  ">
          <Link href="/" legacyBehaviour>
            <li className="mx-[15px]">
              <a className="text-[#6A6870] font-semibold text-[16px]" href="/">
                Home
              </a>
            </li>
          </Link>
          <Link href="/" legacyBehaviour>
            <li className="mx-[15px]">
              <a className="text-[#6A6870] font-semibold text-[16px]" href="/">
                Ads
              </a>
            </li>
          </Link>
          <Link href="/" legacyBehaviour>
            <li className="mx-[15px]">
              <a className="text-[#6A6870] font-semibold text-[16px]" href="/">
                Content
              </a>
            </li>
          </Link>
          <Link href="/" legacyBehaviour>
            <li className="mx-[15px]">
              <a className="text-[#6A6870] font-semibold text-[16px]" href="/">
                Social Media Post
              </a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="sm:flex lg:flex md:hidden hidden flex-wrap items-center">
        <Link href="/" legacyBehavior>
          <a
            href="/"
            className="text-[#6A6870] font-semibold text-[16px] mr-[20px] cursor-pointer "
          >
            Sign In
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a
            className="text-[#24BF99] text-[18px] font-semibold border-2 cursor-pointer border-[#24BF99] px-[40px] py-[8px] rounded-[6px] "
            href="/"
          >
            Get Started
          </a>
        </Link>
      </div>
      <div className="sm:hiiden lg:hidden md:block">
        <MenuOutlined style={{ fontSize: "24px", color: "#232C61" }} />
      </div>
    </nav>
  );
}
