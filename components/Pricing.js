import React from "react";
import { CheckCircleOutlined, CheckCircleFilled } from "@ant-design/icons";
import Link from "next/link";
import InstantHeadings from "./InstantHeadings";

export default function Pricing() {
  return (
    <div className="sm:mt-[150px] mt-[50px] mb-[800px] sm:px-[0px] px-[20px] ">
      <div>
        <InstantHeadings title="Buy a Plan of your choice" />
      </div>
      <div className="flex flex-wrap items-center justify-center sm:gap-10 gap-4 max-w-[100%] sm:w-[60%] w-[100%] mx-auto sm:mt-[70px] mt-[20px] ">
        <div className="border border-[#E5E5E5] rounded-[8px] p-[30px] max-w-[100%] w-[434px] ">
          <div className="flex flex-wrap items-center max-w-[100%] justify-between">
            <div>
              <h3 className="text-[#232C61] font-bold text-[20px] ">
                Basic Plan
              </h3>
            </div>
            <div>
              <div className="flex items-center justify-center w-[24px] h-[24px] rounded-[50px]           border-[#E5E5E5] border "></div>
            </div>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-[#232C61] text-[42px] font-extrabold ">
              $9/mo
            </h3>
            <p className="text-[16px] text-[#6A6870] mt-[15px] ">
              Includes up to 4 users + 1000 queries
            </p>
            <div className="mt-[20px]">
              <div className="flex mt-[20px] items-center justify-start">
                <CheckCircleOutlined
                  style={{ color: "#6A6870", fontSize: "18px" }}
                />
                <span className="ml-[8px] text-[16px] text-[#232C61] ">
                  Access to all basic features
                </span>
              </div>
              <div className="flex mt-[20px] items-center justify-start">
                <CheckCircleOutlined
                  style={{ color: "#6A6870", fontSize: "18px" }}
                />
                <span className="ml-[8px] text-[16px] text-[#232C61] ">
                  Up to 4 individual users
                </span>
              </div>
              <div className="flex mt-[20px] items-center justify-start">
                <CheckCircleOutlined
                  style={{ color: "#6A6870", fontSize: "18px" }}
                />
                <span className="ml-[8px] text-[16px] text-[#232C61] ">
                  1000 queries per account
                </span>
              </div>
              <div className="flex mt-[20px] items-center justify-start">
                <CheckCircleOutlined
                  style={{ color: "#6A6870", fontSize: "18px" }}
                />
                <span className="ml-[8px] text-[16px] text-[#232C61] ">
                  Basic chat and email support
                </span>
              </div>
            </div>
            <div className="bg-[#C9C9C9] hover:bg-[#9ca3af] transition-all text-[18px] cursor-pointer mt-[20px] py-[10px] text-white rounded-[6px] max-w-[100%] w-[100%] text-center ">
              <Link href="/" legacyBehavior>
                <a href="/">Select Plan</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#03C6C2] rounded-[8px] p-[30px] max-w-[100%] w-[434px] ">
          <div className="flex flex-wrap items-center max-w-[100%] justify-between">
            <div>
              <h3 className="text-[#232C61] font-bold text-[20px] ">
                Business Plan
              </h3>
            </div>
            <div>
              {/* <div className="flex items-center justify-center w-[24px] h-[24px] rounded-[50px]           border-[#E5E5E5] border "></div> */}
              <CheckCircleFilled
                style={{ color: "#03C6C2", fontSize: "20px" }}
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-[#232C61] text-[42px] font-extrabold ">
              $59/yr
            </h3>
            <p className="text-[16px] text-[#6A6870] mt-[15px] ">
              Includes up to 10 users + 10,000 queries
            </p>
            <div className="mt-[20px]">
              <div className="flex mt-[20px] items-center justify-start">
                <CheckCircleOutlined
                  style={{ color: "#6A6870", fontSize: "18px" }}
                />
                <span className="ml-[8px] text-[16px] text-[#232C61] ">
                  Access to all premium features
                </span>
              </div>
              <div className="flex mt-[20px] items-center justify-start">
                <CheckCircleOutlined
                  style={{ color: "#6A6870", fontSize: "18px" }}
                />
                <span className="ml-[8px] text-[16px] text-[#232C61] ">
                  Up to 10 individual users
                </span>
              </div>
              <div className="flex mt-[20px] items-center justify-start">
                <CheckCircleOutlined
                  style={{ color: "#6A6870", fontSize: "18px" }}
                />
                <span className="ml-[8px] text-[16px] text-[#232C61] ">
                  10,000 queries per account
                </span>
              </div>
              <div className="flex mt-[20px] items-center justify-start">
                <CheckCircleOutlined
                  style={{ color: "#6A6870", fontSize: "18px" }}
                />
                <span className="ml-[8px] text-[16px] text-[#232C61] ">
                  Priority chat and email support
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-l from-[#08D586] via-[#03C6C2] to-[#02B9EC] hover:bg-gradient-to-l hover:from-[#02B9EC] hover:via-[#03C6C2] hover:to-[#08D586] hover:bg-[#9ca3af] transition-all text-[18px] cursor-pointer mt-[20px] py-[10px] text-white rounded-[6px] max-w-[100%] w-[100%] text-center ">
              <Link href="/" legacyBehavior>
                <a href="/">Select Plan</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
