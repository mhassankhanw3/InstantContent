import React from "react";
import InstantHeadings from "./InstantHeadings";
import AdsCompo from "./AdsCompo";

export default function InstantSeo() {
  return (
    <div className="sm:mt-[150px] mt-[50px] sm:px-[20px] px-[0px] ">
      <div className="px-[14px] sm:px-[0px]">
        <InstantHeadings
          title="Instant Content helps create SEO-Optimized Content"
          desc="Cut writing times by 80% so you can focus more on the projects you love."
        />
      </div>
      <div>
        <div className="sm:mt-[70px] mt-[20px] grid sm:grid-flow-col grid-cols-none gap-4 justify-center sm:w-[1100px] w-[100%] max-w-full mx-auto">
          <div className="max-w-full w-[358px] my-[0px] sm:px-[0px] px-[10px] sm:my-[0px] linear-bg mx-0">
            <AdsCompo
              title="Headlines"
              desc="Create catchy Facebook Ad copies."
              img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/intro-cyKSJ4nGnYjCNKb.png"
              css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
            />
          </div>
          <div className="max-w-full w-[358px] my-[0px] sm:px-[0px] px-[10px] sm:my-[0px] linear-bg mx-0">
            <AdsCompo
              title="Meta Titles"
              desc="Create catchy Facebook Ad copies."
              img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/global-umCO2Jrv8lLOvM0.png"
              css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
            />
          </div>
          <div className="max-w-full w-[358px] my-[0px] sm:px-[0px] px-[10px] sm:my-[0px] linear-bg mx-0">
            <AdsCompo
              title="Meta Description"
              desc="Create catchy Facebook Ad copies."
              img="https://d5hdtqvs98ocz.cloudfront.net/cdn/add/meta-kI4r11QqAlwpOcM.png"
              css="bg-gradient-to-r from-[#02B9EC] via-[#03C6C2] to-[#08D586]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
