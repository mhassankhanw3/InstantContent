import React from "react";
// import Image from "next/image";
import twitter from "../../public/images/twitter.png";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ArrowRightOutlined } from "@ant-design/icons";
// import wand from "..//..//public//images"

const inter = Inter({ subsets: ["greek"] });

export default function test() {
  return (
    <div>
      {/* <Image src={twitter} /> */}
      <div>
        <div className="my- flex flex-col justify-center items-center">
          <p className="text-[41px] font-bold sm:max-w-[500px]  text-center">
            Generate instant <span className="text-green-500"> Content </span>
            with AI{" "}
            <img
              src="https://d5hdtqvs98ocz.cloudfront.net/cdn/time/%C3%B0%C2%9F%C2%AA%C2%84-(1)-9gJ13efbW6kuq5H.png"
              alt="error"
            />
          </p>

          <p className=" my-5 text-[27px]  text-center sm:max-w-[500px]">
            Begin the magic by creating extraordinary content with Artificial
            Intelligence, Easily.
          </p>

          <button className="my-5 px-3 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold  rounded-[5px] hover::bg-gradient-to-r hover:from-green-500 hover:to-blue-500 w-[171px]">
            Get started <ArrowRightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}
