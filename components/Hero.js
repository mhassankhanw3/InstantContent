import React from "react";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Hero() {
  return (
    <div className="bubble">
      <div className="mx-auto max-w-[100%] text-center mt-[100px] w-[950px] ">
        <h1 className="text-[#232C61] text-center text-[42px] font-bold ">
          Generate instant{" "}
          <span className="text-[#24BF99] text-center text-[42px] font-bold ">
            Content
          </span>
        </h1>{" "}
        <div className="flex items-center justify-center">
          <p className="text-[#232C61] text-center text-[42px] font-bold ">
            with AI.
          </p>
          <img
            className="w-[40px] h-[40px]  ml-[10px]"
            src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/magic-wand-QTr5yhMaXoKhZsW.png"
            alt=""
          />
        </div>
        <p className="text-[#6A6870] text-[26px] my-[30px] ">
          Begin the magic by creating extraordinary content with Artificial
          Intelligence, Easily.{" "}
        </p>
        <div className="bg-gradient-to-l from-[#08D586] via-[#03C6C2] to-[#02B9EC] hover:bg-gradient-to-l hover:from-[#02B9EC] hover:via-[#03C6C2] hover:to-[#08D586] hover:bg-[#9ca3af] transition-all text-[18px] cursor-pointer mt-[20px] py-[10px] text-white rounded-[6px] max-w-[100%] w-[200px] mx-auto text-center flex items-center justify-center  ">
          <Link href="/" legacyBehavior>
            <a className=" flex items-center justify-center " href="/">
              Get Started <ArrowRightOutlined style={{ marginLeft: "8px" }} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
