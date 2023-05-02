import FeaturesCompo from "@/components/FeaturesCompo";
import InstantHeadings from "@/components/InstantHeadings";
import React from "react";

export default function Steps() {
  return (
    <div>
      <div>
        <InstantHeadings title="How easy it to use" />
      </div>
      <div className="sm:px-0 px-[10px]">
        <div>
          <FeaturesCompo
            head="Step 1"
            title="Input Product Details "
            desc="This gives Copy.ai a bit of context on how to best optimize your article."
            img_1="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/step-zqyVnKVdwzhti64.png"
            img_2="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/fbads2-GsAeckxpZzVqruC.png"
            css="flex flex-row flex-wrap items-center md:justify-evenly justify-center w-[100%]"
          />
        </div>
        <div className="mx-auto max-w-[100%] md:w-[600px] w-[400px]  hidden sm:flex items-center justify-center ">
          <img
            className="w-[450px]"
            src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/new-D2mX1nDCJespdLm.png"
            alt=""
          />
        </div>
        <div>
          <FeaturesCompo
            head="Step 2"
            title="Choose a Tone"
            desc="This gives Copy.ai a bit of context on how to best optimize your article."
            img_1="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/step-zqyVnKVdwzhti64.png"
            img_2="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/fbads-2kz4cDsdc9XQj1A.png"
            css="flex flex-row-reverse flex-wrap items-center md:justify-evenly justify-center w-[100%]"
          />
        </div>
        <div className="mx-auto max-w-[100%] md:w-[600px] w-[400px]  hidden sm:flex items-center justify-center ">
          <img
            className="w-[450px] rotate-180 transform -scale-x-100 "
            src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/new-D2mX1nDCJespdLm.png"
            alt=""
          />
        </div>
        <div>
          <FeaturesCompo
            head="Step 3"
            title="Choose a Langauge"
            desc="This gives Copy.ai a bit of context on how to best optimize your article."
            img_1="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/step-zqyVnKVdwzhti64.png"
            img_2="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/fbads3-YxB6thdGN3eIi25.png"
            css="flex flex-row flex-wrap items-center md:justify-evenly justify-center w-[100%]"
          />
        </div>
        <div className="mx-auto max-w-[100%] md:w-[600px] w-[400px]  hidden sm:flex items-center justify-center ">
          <img
            className="w-[450px]"
            src="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/new-D2mX1nDCJespdLm.png"
            alt=""
          />
        </div>
        <div>
          <FeaturesCompo
            head="Step 4"
            title="Input Description"
            desc="This gives Copy.ai a bit of context on how to best optimize your article."
            img_1="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/step-zqyVnKVdwzhti64.png"
            img_2="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/fbads4-mrxettZ81UT2VfH.png"
            css="flex flex-row-reverse flex-wrap items-center md:justify-evenly justify-center w-[100%]"
          />
        </div>
      </div>
    </div>
  );
}
