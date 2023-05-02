import React from "react";
import {
  InstagramFilled,
  FacebookFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="w-[100%] max-w-[100%] mt-[40px] p-10 bg-gray-900">
      <div className="mx-auto px-7">
        <div className="flex flex-col mb-6 p-2">
          <div>
            <img
              src="https://d5hdtqvs98ocz.cloudfront.net/cdn/ic/group-4599-(1)-pM4PCO6tUZKXKJR.png"
              alt="Instant Content logo"
            />
          </div>

          <div
            style={{ fontSize: "24px" }}
            className="flex justify-end max-w-full space-x-5 w-full mt-4 sm:mt-0"
          >
            <FacebookFilled className="text-white text-lg sm:text-2xl" />
            <TwitterCircleFilled className="text-white text-lg sm:text-2xl" />
            <InstagramFilled className="text-white text-lg sm:text-2xl" />
          </div>

          <div className=" w-[40%] max-w-[100%] grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div>
              <h2 className="text-lg font-medium mb-3 text-gray-300">
                Product
              </h2>
              <ul className="text-gray-400">
                <li className="">Ads</li>
                <li className="my-2">Content</li>
                <li className="w-full sm:w-[200px]">Social Media Posts</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-3 text-gray-300">
                Company
              </h2>
              <ul className="text-gray-400">
                <li className="mb-2">Blog</li>
                <li className="mb-2">Pricing</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-3 text-gray-300">
                Resources
              </h2>
              <ul className="text-gray-400">
                <li className="mb-2">Newsletter</li>
                <li className="mb-2">Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-400 my-6" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-400 mb-4 sm:mb-0">
            Copyright Instant Content 2023. All rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
