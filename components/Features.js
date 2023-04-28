import React from "react";
import FeaturesCompo from "./FeaturesCompo";

export default function Features() {
  return (
    <div className="mt-[160px]">
      <div className="max-w-[100%] text-center">
        <h2 className="text-[#232C61] text-[42px] font-extrabold ">
          How easy it is to use
        </h2>
        <p className="text-[#6A6870] text-[26px] w-[520px] mx-auto mt-[20px] ">
          Cut writing times by 80% so you can focus more on the projects you
          love.
        </p>
      </div>
      <div className="mt-[90px] ">
        <FeaturesCompo
          head="Step 1"
          title="Enter your post's title and keyword"
          desc="This gives Copy.ai a bit of context on how to best optimize your article."
          img_1="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/step-zqyVnKVdwzhti64.png"
          img_2="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/gropu1-2BGuOZLTsZtKFgk.png"
          css="flex flex-row flex-wrap items-center justify-around w-[100%]"
        />
        <div className="mx-auto max-w-[100%] w-[600px] flex items-center justify-center ">
          <img
            src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/new-D2mX1nDCJespdLm.png"
            alt=""
          />
        </div>
        <FeaturesCompo
          head="Step 2"
          title="Review your outline and main talking points"
          desc="This gives Copy.ai a bit of context on how to best optimize your article."
          img_1="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/step-zqyVnKVdwzhti64.png"
          img_2="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/group2-3NFLN73zgVVy5XA.png"
          css="flex flex-row-reverse flex-wrap items-center  justify-around w-[100%]"
        />
      </div>
      <div className="mx-auto max-w-[100%] w-[500px]  flex items-center justify-end ">
        <img
          className="w-[240px]"
          src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/new2-agkxGUZiDcrIjwb.png"
          alt=""
        />
      </div>
      <div className=" max-w-[100%] mt-[20px] w-[430px]  mx-auto text-center ">
        <div className="flex items-center justify-center">
          <img
            src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/step-zqyVnKVdwzhti64.png"
            alt=""
          />
          <h2 className="text-transparent text-[20px] font-semibold bg-clip-text bg-gradient-to-l from-[#08D586] via-[#03C6C2] to-[#02B9EC] ml-[9px]">
            Step 3
          </h2>
        </div>
        <h3 className="my-[18px] text-[#232C61] text-[23px] font-extrabold ">
          Edit, polish, and publish
        </h3>
        <p className="text-[23px] text-[#525252] ">
          This gives Copy.ai a bit of context on how to best optimize your
          article.
        </p>
      </div>
    </div>
  );
}
