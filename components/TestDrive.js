import Image from "next/image";
import { Inter } from "next/font/google";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import InstantHeadings from "./InstantHeadings";

export default function TestDrive() {
  return (
    <div className="bubbling ">
      <div className="sm:px-[0px] px-[20px] max-w-[100%] sm:w-[550px] mx-auto mt-[120px] ">
        <div className="mx-auto sm:px-[0px] px-[10px] max-w-[100%]  text-center mt-[60px] w-[600px] ">
          <InstantHeadings
            title="Lets Go for a Test Drive!"
            desc="Go from 0 to 1000 words in just 2 minutes!"
            css="w-[600px]"
          />
        </div>
        <div className=" bg-[#24BF99] hover:bg-[#10b981] transition-all text-[18px] cursor-pointer sm:mt-[20px] mt-[30px] py-[10px] text-white rounded-[6px] max-w-[100%] w-[90%] sm:w-[200px] mx-auto text-center flex items-center justify-center">
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
