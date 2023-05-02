import React from "react";
import FeaturesCompo from "./FeaturesCompo";
import InstantHeadings from "./InstantHeadings";

export default function Features() {
  return (
    <div className="sm:mt-[160px] mt-[120px] sm:px-[0px] px-[20px] ">
      <div>
        <InstantHeadings
          title="How easy it is to use"
          desc="Cut writing times by 80% so you can focus more on the projects you
          love."
        />
      </div>
      <div className="sm:mt-[90px] mt-[10px] ">
        <FeaturesCompo
          head="Step 1"
          title="Enter your post's title and keyword"
          desc="This gives Copy.ai a bit of context on how to best optimize your article."
          img_1="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/step-zqyVnKVdwzhti64.png"
          img_2="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/gropu1-2BGuOZLTsZtKFgk.png"
          css="flex flex-row flex-wrap items-center justify-evenly w-[100%]"
        />
        <div className="mx-auto max-w-[100%] sm:block md:w-[600px] w-[400px]  hidden items-center justify-center ">
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
          css="flex flex-row-reverse flex-wrap items-center  justify-evenly w-[100%]"
        />
      </div>
      <div className="mx-auto max-w-[100%] sm:w-[420px] sm:flex hidden items-center sm:justify-end ">
        <img
          className="sm:w-[220px] w-[240px] "
          src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/new2-agkxGUZiDcrIjwb.png"
          alt=""
        />
      </div>
      <div className="mx-auto max-w-[100%] sm:mt-[20px] mt-[30px] w-[430px] sm:text-center ">
        <div className="flex items-center sm:justify-center">
          <img
            src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/step-zqyVnKVdwzhti64.png"
            alt=""
          />
          <h2 className="text-transparent text-[20px] font-semibold font-Mulish bg-clip-text bg-gradient-to-l from-[#08D586] via-[#03C6C2] to-[#02B9EC] ml-[9px]">
            Step 3
          </h2>
        </div>
        <h3 className="my-[18px] text-[#232C61] text-[23px] font-extrabold font-Mulish ">
          Edit, polish, and publish
        </h3>
        <p className="text-[23px] text-[#525252] font-Mulish ">
          This gives Copy.ai a bit of context on how to best optimize your
          article.
        </p>
      </div>
    </div>
  );
}
