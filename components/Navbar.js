import React, { useState } from "react";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import ResNavbar from "./ResNavbar";

// border border-black
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="flex flex-wrap bg-white items-center justify-between max-w-[100%] mx-auto py-[20px] sm:px-[10px] md:px-[50px] px-[20px] ">
        <div>
          <img
            className="cursor-pointer sm:w-[170px] md:w-[220px] "
            src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/logo-rdRGl3IohDB36C0.png"
            alt=""
          />
        </div>
        <div>
          <ul className="sm:flex hidden flex-wrap items-center   ">
            <Link href="/" legacyBehavior>
              <li className="mx-[3px] md:mx-[10px]">
                <a
                  className="text-[#6A6870] font-semibold text-[16px]"
                  href="/"
                >
                  Home
                </a>
              </li>
            </Link>
            <Link href="/" legacyBehavior>
              <li className="mx-[3px] md:mx-[10px]">
                <a
                  className="text-[#6A6870] font-semibold text-[16px]"
                  href="/"
                >
                  Ads
                </a>
              </li>
            </Link>
            <Link href="/" legacyBehavior>
              <li className="mx-[3px] md:mx-[10px]">
                <a
                  className="text-[#6A6870] font-semibold text-[16px]"
                  href="/"
                >
                  Content
                </a>
              </li>
            </Link>
            <Link href="/" legacyBehavior>
              <li className="mx-[3px] md:mx-[10px]">
                <a
                  className="text-[#6A6870] font-semibold text-[16px]"
                  href="/"
                >
                  Social Media Post
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="sm:flex hidden flex-wrap items-center">
          <Link href="/" legacyBehavior>
            <a
              href="/"
              className="text-[#6A6870] font-semibold text-[16px] mr-[10px] md:mr-[20px] cursor-pointer "
            >
              Sign In
            </a>
          </Link>
          <Link href="/" legacyBehavior>
            <a
              className="text-[#24BF99] text-[18px] font-semibold border-2 cursor-pointer border-[#24BF99] px-[20px] md:px-[40px] py-[4px] md:py-[8px] rounded-[6px] "
              href="/"
            >
              Get Started
            </a>
          </Link>
        </div>
        <div className="sm:hidden flex">
          <MenuOutlined
            onClick={handleToggle}
            style={{ fontSize: "24px", color: "#232C61" }}
          />
        </div>
      </nav>
      {toggle ? <ResNavbar toggle={toggle} setToggle={setToggle} /> : ""}
    </>
  );
}
